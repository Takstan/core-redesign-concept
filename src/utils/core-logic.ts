/**
 * Pure business logic for CORE Advantage Twin Ports operations:
 * - Service area & ZIP code validation for Superior/Duluth region
 * - Roll-off dumpster sizing advisor
 * - Lead quote form validation
 */

export interface CoverageResult {
  status: 'primary' | 'extended' | 'out_of_area';
  city: string;
  state: string;
  dispatchHub: string;
  message: string;
  averageResponse: string;
}

// Known Twin Ports and surrounding North Shore / Douglas / St. Louis County ZIPs
export const PRIMARY_ZIPS: Record<string, { city: string; state: string }> = {
  // Superior & Douglas County, WI
  '54880': { city: 'Superior', state: 'WI' },
  '54874': { city: 'South Range', state: 'WI' },
  '54864': { city: 'Oliver', state: 'WI' },
  '54865': { city: 'Poplar', state: 'WI' },
  '54849': { city: 'Lake Nebagamon', state: 'WI' },
  '54838': { city: 'Foxboro', state: 'WI' },
  
  // Duluth & St. Louis County, MN
  '55802': { city: 'Duluth (Downtown/Canal Park)', state: 'MN' },
  '55803': { city: 'Duluth (Woodland/Lakeside)', state: 'MN' },
  '55804': { city: 'Duluth (East End/Congdon)', state: 'MN' },
  '55805': { city: 'Duluth (Central Hillside)', state: 'MN' },
  '55806': { city: 'Duluth (West End/Lincoln Park)', state: 'MN' },
  '55807': { city: 'Duluth (West Duluth)', state: 'MN' },
  '55808': { city: 'Duluth (Gary/New Duluth)', state: 'MN' },
  '55810': { city: 'Proctor', state: 'MN' },
  '55811': { city: 'Hermantown / Duluth Heights', state: 'MN' },
  '55812': { city: 'Duluth (Kenwood/UMD)', state: 'MN' },
  '55720': { city: 'Cloquet', state: 'MN' },
  '55733': { city: 'Esko', state: 'MN' },
  '55718': { city: 'Carlton', state: 'MN' },
};

export const EXTENDED_ZIPS: Record<string, { city: string; state: string }> = {
  '55616': { city: 'Two Harbors', state: 'MN' },
  '55792': { city: 'Virginia', state: 'MN' },
  '54844': { city: 'Iron River', state: 'WI' },
  '54873': { city: 'Solon Springs', state: 'WI' },
};

export function checkTwinPortsCoverage(input: string): CoverageResult {
  const clean = input.trim().toLowerCase();
  if (!clean) {
    return {
      status: 'out_of_area',
      city: 'Unknown',
      state: '',
      dispatchHub: 'Superior, WI Headquarters',
      message: 'Please enter a ZIP code or city name.',
      averageResponse: 'Same day',
    };
  }

  // Check 5-digit zip
  if (/^\d{5}$/.test(clean)) {
    if (PRIMARY_ZIPS[clean]) {
      const loc = PRIMARY_ZIPS[clean];
      return {
        status: 'primary',
        city: loc.city,
        state: loc.state,
        dispatchHub: 'Superior Yard (Central Hub)',
        message: `Full coverage guaranteed in ${loc.city}, ${loc.state}. Priority dispatch & zero extra mileage fees.`,
        averageResponse: 'Within 2–4 hours / Next-Day Delivery',
      };
    }
    if (EXTENDED_ZIPS[clean]) {
      const loc = EXTENDED_ZIPS[clean];
      return {
        status: 'extended',
        city: loc.city,
        state: loc.state,
        dispatchHub: 'Twin Ports Perimeter Hub',
        message: `Service available in ${loc.city}, ${loc.state}. Minor standard trip adjustment applies.`,
        averageResponse: 'Scheduled 24–48 hours',
      };
    }
  }

  // Check City string matches
  const cityEntries = Object.values(PRIMARY_ZIPS);
  const matchPrimary = cityEntries.find((c) =>
    clean.includes(c.city.toLowerCase()) || c.city.toLowerCase().includes(clean)
  );
  if (matchPrimary) {
    return {
      status: 'primary',
      city: matchPrimary.city,
      state: matchPrimary.state,
      dispatchHub: 'Superior Yard (Central Hub)',
      message: `Full priority service across ${matchPrimary.city}. All dumpster sizes and crews active daily.`,
      averageResponse: 'Same-day or next-day turnaround',
    };
  }

  const matchExtended = Object.values(EXTENDED_ZIPS).find((c) =>
    clean.includes(c.city.toLowerCase()) || c.city.toLowerCase().includes(clean)
  );
  if (matchExtended) {
    return {
      status: 'extended',
      city: matchExtended.city,
      state: matchExtended.state,
      dispatchHub: 'Regional Fleet',
      message: `Extended Twin Ports corridor service available in ${matchExtended.city}.`,
      averageResponse: 'Scheduled delivery',
    };
  }

  return {
    status: 'out_of_area',
    city: input.trim(),
    state: '',
    dispatchHub: 'Custom Dispatch Review',
    message: `Location outside our standard daily perimeter. We frequently accommodate special commercial & industrial accounts upon review.`,
    averageResponse: 'Custom inquiry review',
  };
}

export interface DumpsterSpec {
  size: '10-yard' | '15-yard' | '20-yard' | '30-yard';
  name: string;
  volume: string;
  dimensions: string;
  includedTonnage: string;
  idealFor: string[];
  capacityInTruckLoads: number;
}

export const DUMPSTER_SPECS: Record<string, DumpsterSpec> = {
  '10-yard': {
    size: '10-yard',
    name: '10-Yard Low Profile Roll-Off',
    volume: '10 cubic yards',
    dimensions: "12' L × 8' W × 3.5' H",
    includedTonnage: '2.0 Tons (4,000 lbs)',
    idealFor: [
      'Heavy materials (concrete, dirt, rock, asphalt shingles)',
      'Single-room bath or kitchen remodel',
      'Basement or single-stall garage cleanouts',
      'Small deck removal (up to 250 sq ft)',
    ],
    capacityInTruckLoads: 4,
  },
  '15-yard': {
    size: '15-yard',
    name: '15-Yard Mid-Size Roll-Off',
    volume: '15 cubic yards',
    dimensions: "14' L × 8' W × 4.5' H",
    includedTonnage: '2.5 Tons (5,000 lbs)',
    idealFor: [
      'Medium renovation projects (flooring, drywall, cabinetry)',
      'Multiple room decluttering & estate cleanouts',
      'Roofing tear-off (up to 30 squares of single-layer shingles)',
      'Light yard waste & brush disposal',
    ],
    capacityInTruckLoads: 6,
  },
  '20-yard': {
    size: '20-yard',
    name: '20-Yard Most Popular Contractor Roll-Off',
    volume: '20 cubic yards',
    dimensions: "22' L × 8' W × 4.5' H",
    includedTonnage: '3.5 Tons (7,000 lbs)',
    idealFor: [
      'Whole-home flooring & carpet replacement',
      'Multi-room remodels & substantial renovations',
      'Large garage or attic clearing',
      'Commercial office tenant improvements',
    ],
    capacityInTruckLoads: 8,
  },
  '30-yard': {
    size: '30-yard',
    name: '30-Yard Heavy Commercial & Demo Roll-Off',
    volume: '30 cubic yards',
    dimensions: "22' L × 8' W × 6.0' H",
    includedTonnage: '5.0 Tons (10,000 lbs)',
    idealFor: [
      'Complete home gut or structural demolition debris',
      'Major commercial construction jobsites',
      'Large-scale industrial site cleanouts',
      'Major storm debris or tree clearing hauls',
    ],
    capacityInTruckLoads: 12,
  },
};

export function getDumpsterRecommendation(projectType: string): DumpsterSpec {
  switch (projectType) {
    case 'heavy_masonry':
    case 'concrete_dirt':
      return DUMPSTER_SPECS['10-yard'];
    case 'roofing':
    case 'garage_cleanout':
    case 'bathroom_remodel':
      return DUMPSTER_SPECS['15-yard'];
    case 'home_renovation':
    case 'flooring':
    case 'whole_house':
      return DUMPSTER_SPECS['20-yard'];
    case 'demolition':
    case 'commercial_site':
    case 'large_estate':
    default:
      return DUMPSTER_SPECS['30-yard'];
  }
}

export interface QuoteFormInput {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  projectDetails: string;
  propertyAddress: string;
  zipCode: string;
  preferredDate?: string;
  binSize?: string;
}

export function validateQuoteForm(data: Partial<QuoteFormInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name or company name.';
  }

  const phoneDigits = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || phoneDigits.length < 10) {
    errors.phone = 'Please provide a valid 10-digit phone number for dispatch call.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address for quote delivery.';
  }

  if (!data.serviceCategory || data.serviceCategory === '') {
    errors.serviceCategory = 'Please select a primary service category.';
  }

  if (!data.propertyAddress || data.propertyAddress.trim().length < 4) {
    errors.propertyAddress = 'Please specify the project location or address.';
  }

  if (!data.zipCode || !/^\d{5}$/.test(data.zipCode.trim())) {
    errors.zipCode = 'Please enter a 5-digit ZIP code for service dispatch.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
