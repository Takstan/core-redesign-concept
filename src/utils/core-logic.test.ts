import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkTwinPortsCoverage,
  getDumpsterRecommendation,
  validateQuoteForm,
  DUMPSTER_SPECS,
} from './core-logic.ts';

test('checkTwinPortsCoverage identifies Superior WI primary zone', () => {
  const result = checkTwinPortsCoverage('54880');
  assert.equal(result.status, 'primary');
  assert.equal(result.city, 'Superior');
  assert.equal(result.state, 'WI');
  assert.match(result.message, /Superior/);
});

test('checkTwinPortsCoverage identifies Duluth MN zip codes', () => {
  const resDuluth = checkTwinPortsCoverage('55802');
  assert.equal(resDuluth.status, 'primary');
  assert.match(resDuluth.city, /Duluth/);
  assert.equal(resDuluth.state, 'MN');
});

test('checkTwinPortsCoverage identifies extended zones like Two Harbors', () => {
  const resExtended = checkTwinPortsCoverage('55616');
  assert.equal(resExtended.status, 'extended');
  assert.equal(resExtended.city, 'Two Harbors');
});

test('checkTwinPortsCoverage handles out of area locations gracefully', () => {
  const resOut = checkTwinPortsCoverage('90210');
  assert.equal(resOut.status, 'out_of_area');
  assert.match(resOut.message, /outside/i);
});

test('getDumpsterRecommendation returns correct bin specs', () => {
  const concreteBin = getDumpsterRecommendation('concrete_dirt');
  assert.equal(concreteBin.size, '10-yard');
  assert.equal(concreteBin.dimensions, "12' L × 8' W × 3.5' H");

  const roofingBin = getDumpsterRecommendation('roofing');
  assert.equal(roofingBin.size, '15-yard');

  const remodelBin = getDumpsterRecommendation('home_renovation');
  assert.equal(remodelBin.size, '20-yard');

  const demoBin = getDumpsterRecommendation('demolition');
  assert.equal(demoBin.size, '30-yard');
  assert.equal(DUMPSTER_SPECS['30-yard'].capacityInTruckLoads, 12);
});

test('validateQuoteForm catches missing fields and invalid emails', () => {
  const invalid = validateQuoteForm({
    fullName: '',
    email: 'bad-email',
    phone: '123',
    serviceCategory: '',
  });

  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.serviceCategory);
  assert.ok(invalid.errors.propertyAddress);
  assert.ok(invalid.errors.zipCode);
});

test('validateQuoteForm accepts valid payload', () => {
  const valid = validateQuoteForm({
    fullName: 'Robert Lind',
    phone: '(715) 555-0199',
    email: 'robert@contractorpros.com',
    serviceCategory: 'roll_off_dumpster',
    propertyAddress: '1420 Tower Ave, Superior, WI',
    zipCode: '54880',
  });

  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
