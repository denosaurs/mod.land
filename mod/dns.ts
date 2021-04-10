// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

import { CF_TOK, CF_ZID } from "./env.ts";
import { DomainRecord } from "./mod.ts";

const CF_BASE = "https://api.cloudflare.com/client/v4/";

export interface CFResponse<T> {
  result: T | null;
  success: boolean;
  errors: string[];
  messages: string[];
  resultInfo: Record<string, unknown>;
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
  const page = 1;

  query.set("per_page", String(per));

  let records: CFRecord[] = [];
  let result = [];

  do {
    query.set("page", String(page));
    const response = await cf<CFRecord[]>(
     
