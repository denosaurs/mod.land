// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

import { log, delay } from "./deps.ts";

import dns from "./dns.ts";

import { DomainRecord } from "./mod.ts";

const DOMAIN = "mod.land";

const logger = log.prefix("mod");

if (import.meta.main) {
  await log.setup({ filter: "INFO" });

  logger.info("mod.land CLI is running 🌟");
  logger.info("gathering CNAMEs from cloudflare api...");
  const registered = await dns.getCNAMEs();
  logger.warning(
    `got ${Object.keys(registered).length} registered CNAMEs on cf`,
  );

  logger.info("gathering CNAMEs from repo...");
  const local = (await import("../cnames.ts")).default;
  logger.warning(`got ${Object.keys(local).length} local CNAMEs in repo`);

  const created: [string, DomainRecord][] = [];
  const updated: [string, DomainRecord][] = [];

  logger.info(`inspecting records ...`);

  for (let [name, record] of Object.entries<DomainRecord>(local)) {
    record = Object.assign({}, { proxied: true }, record);

    if (name === "@") name = DOMAIN; // root
    else name = `${name}.${DOMAIN}`; // subd

    const ref = registered[name];
    if (ref) {
      const host = new URL(`https://${record.target}`).host;
      if (ref.content !== host || ref.proxied !== record.proxied) {
        updated.push([name, record]);
      }
    } else {
      created.push([name, record]);
    }
  }

  logger.warning(`found ${created.length} CNAMEs to create`);
  logger.warning(`found ${updated.length} CNAMEs to update`);

  for (let [name, record] of created) {
    await dns.createCNAME(name, record);
    await delay(100);
  }

  for (let [name, record] of updated) {
    const ref = registered[name];
    await dns.updateCNAME(ref.id, name, record);
    await delay(100);
  }

  logger.info("checking for deleted records...");
  for (let name of Object.keys(local)) {
    if (name === "@") name = DOMAIN; // root
    else name = `${name}.${DOMAIN}`; // subd

    delete registered[name];
  }

  const deleted = Object.entries(registered);
  if (deleted.length > 0) {
    logger.info(`found ${deleted.length} deleted CNAMEs`);
    for (let [_, ref] of deleted) {
      dns.deleteCNAME(ref.id);
    }
  } else {
    logger.info("found none");
  }

  logger.info("syncing done! 🍹");
}
