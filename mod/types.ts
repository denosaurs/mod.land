// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

export interface Record {
  target: string;
  proxied?: boolean;
}

export type CNAMEs = {
  [name: string]: Record;
};

export type RestrictedNames = RegExp[];
