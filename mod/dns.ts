// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

import { CF_ZID, CF_TOK } from "./env.ts";
import { DomainRecord } from "./mod.ts";

const CF_BASE = "https://api.cloudflare.com/client/v4/";

export interface CFResponse<T> {
  result: T | null;
  success: boolean;
  errors: string[];
  messages: string[];
  result_info: Record<string, unknown>;
}

export interface CFRecord {
  name: string;
  content: string;
  proxied: boolean;
  id: string;
}

async function fetchCF(
  method: string,
  endpoint: string,
  data?: Record<string, unknown>,
): Promise<Response> {
  return await fetch(`${CF_BASE}${endpoint}`, {
    method,
    headers: {
      "Authorization": `Bearer ${CF_TOK}`,
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
}

async function cf<T>(
  method: string,
  endpoint: string,
  data?: Record<string, unknown>,
): Promise<CFResponse<T>> {
  const response = await fetchCF(method, endpoint, data);
  return await response.json();
}

function asHost(target: string): string {
  return new URL(`https://${target}`).host;
}

export async function getCNAMEs(): Promise<{ [key: string]: CFRecord }> {
  const query = new URLSearchParams();
  query.append("type", "CNAME");

  const per = 100;
  let page = 1;

  query.set("per_page", String(per));

  let records: CFRecord[] = [];
  let result = [];

  do {
    query.set("page", String(page));
    let response = await cf<CFRecord[]>(
      "GET",
      `zones/${CF_ZID}/dns_records?${query.toString()}`,
    );
    if (!response.result) break;
    result = response.result;
    records = records.concat(result);
  } while (result.length === per);

  return Object.fromEntries(records.map((cname) => [cname.name, cname]));
}

export async function createCNAME(name: string, cname: DomainRecord) {
  const res = await cf<CFRecord>("POST", `zones/${CF_ZID}/dns_records`, {
    type: "CNAME",
    name: name,
    content: asHost(cname.target),
    ttl: 1,
    proxied: cname.proxied,
  });
  if (!res.success) throw new Error(Deno.inspect(res));
}

export async function updateCNAME(
  id: string,
  name: string,
  cname: DomainRecord,
) {
  const res = await cf<CFRecord>("PATCH", `zones/${CF_ZID}/dns_records/${id}`, {
    type: "CNAME",
    name: name,
    content: asHost(cname.target),
    ttl: 1,
    proxied: cname.proxied,
  });
  if (!res.success) throw new Error(Deno.inspect(res));
}

export async function deleteCNAME(id: string) {
  await cf<void>("DELETE", `zones/${CF_ZID}/dns_records/${id}`);
}

export default {
  getCNAMEs,
  createCNAME,
  updateCNAME,
  deleteCNAME,
};
