"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:63519824586701546571 LICENSE.md
// Indra Deva test file

const {expect} = require('chai')
const ShieldDeva = require('./index.js');

describe(indra.me.name, () => {
  beforeEach(() => {
    return ShieldDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(ShieldDeva).to.be.an('object');
    expect(ShieldDeva).to.have.property('agent');
    expect(ShieldDeva).to.have.property('vars');
    expect(ShieldDeva).to.have.property('listeners');
    expect(ShieldDeva).to.have.property('methods');
    expect(ShieldDeva).to.have.property('modules');
  });
})
