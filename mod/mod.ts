// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

export interface DomainRecord {
  target: string;
  proxied?: boolean;
}

export type CNAMEs = {
  [name: string]: DomainRecord;
};

export type RestrictedNames = RegExp[];
