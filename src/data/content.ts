import { ServiceItem, ProjectItem, TestimonialItem, FAQItem } from '../types/index.ts';

export const HERO_IMAGE = '/src/assets/images/hero_core_advantage_1792495987776.jpg';
export const DUMPSTER_IMAGE = '/src/assets/images/service_dumpsters_1792495987901.jpg';
export const DEMO_IMAGE = '/src/assets/images/service_demolition_1792495988341.jpg';
export const SNOW_IMAGE = '/src/assets/images/service_snow_turf_1792495989099.jpg';
export const METAL_IMAGE = '/src/assets/images/service_metal_fab_1792495989064.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'roll-off-dumpsters',
    title: 'Roll-Off Dumpsters',
    tagline: 'Reliable container rental with prompt Twin Ports delivery & haul-away.',
    category: 'Waste & Hauling',
    description:
      'Heavy-duty 10, 15, 20, and 30-yard roll-off containers tailored for construction debris, roofing tear-offs, commercial cleanouts, and residential renovations. We place boards beneath container wheels upon request to protect driveways and pavements.',
    image: DUMPSTER_IMAGE,
    serviceCode: 'roll_off_dumpsters',
    features: [
      'Sizes: 10, 15, 20, and 30 Cubic Yards',
      'Driveway-friendly placement with protective pads',
      'Flexible 7 to 14-day standard rental periods',
      'Transparent flat rates with included tonnage',
    ],
    specs: [
      { label: 'Available Sizes', value: '10, 15, 20, 30 Yard' },
      { label: 'Dispatch Lead Time', value: 'Same-day or next-day delivery' },
      { label: 'Rental Duration', value: '7, 10, 14 days or custom contractor terms' },
      { label: 'Twin Ports Coverage', value: 'Superior, Duluth, Hermantown & Cloquet' },
    ],
    turnaround: 'Same-day dispatch available when ordered before 10:00 AM',
    idealFor: 'Contractors, roofing crews, commercial renovations, and residential cleanouts.',
  },
  {
    id: 'demolition-services',
    title: 'Demolition & Site Prep',
    tagline: 'Controlled structural tear-downs, concrete breaking, and site clearing.',
    category: 'Heavy Equipment',
    description:
      'Full-service residential and light commercial demolition backed by certified hydraulic excavator operators. From complete structural teardowns to interior selective strip-outs, foundation removal, and concrete pulverizing, we execute safely and haul everything away.',
    image: DEMO_IMAGE,
    serviceCode: 'demolition_services',
    features: [
      'Complete residential & commercial teardowns',
      'Interior non-structural gutting & strip-outs',
      'Reinforced concrete breaking & foundation removal',
      'Comprehensive permitting assistance & EPA dust control',
    ],
    specs: [
      { label: 'Fleet Equipment', value: 'CAT 320/330 excavators with shear & pulverizers' },
      { label: 'Safety Standards', value: 'OSHA 30 certified operators, fully insured' },
      { label: 'Debris Disposal', value: '100% compliant recycling & certified haul-away' },
      { label: 'Permits', value: 'Assistance with City of Duluth & Superior municipal filings' },
    ],
    turnaround: 'Site walkthrough within 24 hours of inquiry',
    idealFor: 'Blight removal, unsafe structures, industrial yard clear-outs, and commercial redevelopments.',
  },
  {
    id: 'lawn-turf-care',
    title: 'Lawn & Turf Care',
    tagline: 'Commercial groundskeeping, turf restoration, and hydroseeding.',
    category: 'Grounds & Landscaping',
    description:
      'Professional grounds maintenance for commercial corporate campuses, multi-family developments, and large residential estates across Superior and Duluth. Services include precision mowing, core aeration, over-seeding, turf fertilization, weed management, and full hydroseeding.',
    image: HERO_IMAGE,
    serviceCode: 'lawn_turf_care',
    features: [
      'Commercial fleet groundskeeping contracts',
      'Hydroseeding & high-grade slope erosion control',
      'Core aeration, dethatching & soil conditioning',
      'Scheduled seasonal spring & autumn cleanups',
    ],
    specs: [
      { label: 'Service Frequency', value: 'Weekly, bi-weekly, or seasonal commercial contracts' },
      { label: 'Equipment', value: 'Commercial zero-turn mowers & Finn hydroseeders' },
      { label: 'Soil Health', value: 'Northland climate seed blends & organic soil boosters' },
      { label: 'Client Types', value: 'Commercial complexes, HOAs, industrial yards, private estates' },
    ],
    turnaround: 'Seasonal contracts locked with custom schedule',
    idealFor: 'Facility managers, business parks, construction site revegetation, and property managers.',
  },
  {
    id: 'snow-removal-ice-control',
    title: 'Snow Removal & Ice Control',
    tagline: '24/7 commercial blizzard plowing, salting, and heavy loader clearing.',
    category: 'Winter Operations',
    description:
      'Northern Wisconsin and Minnesota winters demand serious winter operations. CORE Advantage operates round-the-clock commercial snow plowing, front-end loader snow relocation, bulk rock salting, and liquid anti-icing. We ensure your lots, docks, and walkways remain open and compliant.',
    image: SNOW_IMAGE,
    serviceCode: 'snow_removal',
    features: [
      '24/7 dedicated dispatch during Twin Ports storm events',
      'Heavy 4x4 plow trucks, skid steers & rubber-tire loaders',
      'Bulk salting, eco-friendly liquid anti-icing & walkway crews',
      'Off-site snow stacking and haul-away trucking',
    ],
    specs: [
      { label: 'Dispatch Trigger', value: 'Contract standard 1.0" or 2.0" accumulation triggers' },
      { label: 'Shift Readiness', value: 'Continuous 24-hour storm monitoring & patrol' },
      { label: 'De-icing Supply', value: 'Dedicated bulk salt depot in Superior, WI' },
      { label: 'Target Clients', value: 'Hospitals, distribution centers, retail plazas, trucking depots' },
    ],
    turnaround: 'Active routing prior to morning customer traffic',
    idealFor: 'Commercial parking lots, logistics hubs, industrial facilities, and medical offices.',
  },
  {
    id: 'metal-fabrication-welding',
    title: 'Metal Fabrication & Welding',
    tagline: 'Custom architectural steel, heavy machinery repair, and custom rigging.',
    category: 'Industrial Works',
    description:
      'Our Superior shop provides precision welding and structural metal fabrication for commercial, marine, and industrial applications. We handle on-site mobile welding repairs for heavy construction equipment, custom trailer retrofits, structural steel beams, handrails, and industrial waste container rebuilding.',
    image: METAL_IMAGE,
    serviceCode: 'metal_fabrication',
    features: [
      'MIG, TIG, and Stick welding on steel, stainless & aluminum',
      'Heavy equipment bucket hardfacing & boom crack repair',
      'Custom structural steel brackets, lintels & handrails',
      'Mobile welding truck for emergency field repairs',
    ],
    specs: [
      { label: 'Weld Processes', value: 'SMAW, GMAW, GTAW, and FCAW' },
      { label: 'Materials', value: 'Carbon steel, AR400 wear plates, aluminum, stainless' },
      { label: 'Shop Capabilities', value: 'Brake press, plasma CNC cutting, heavy hydraulic bending' },
      { label: 'Field Service', value: 'Fully equipped mobile rig with generator & welder' },
    ],
    turnaround: 'Emergency field repairs dispatched promptly',
    idealFor: 'Logistics fleets, marine contractors, industrial plants, and general contractors.',
  },
  {
    id: 'waste-services-cleanouts',
    title: 'Waste Services & Bulk Cleanouts',
    tagline: 'Comprehensive property clearing, junk removal, and waste diversion.',
    category: 'Waste Management',
    description:
      'Fast, respectful, and thorough estate, warehouse, and jobsite cleanouts. When you have bulk debris, pallet waste, tenant abandonment, or commercial liquidation materials, our crews load, haul, sort, and dispose of everything properly with a strong emphasis on metal and wood recycling.',
    image: DUMPSTER_IMAGE,
    serviceCode: 'waste_services',
    features: [
      'Full labor included: our team loads and hauls',
      'Commercial warehouse clear-outs & pallet removal',
      'Residential estate, foreclosure & eviction cleanouts',
      'Metal recycling diversion & donation sorting',
    ],
    specs: [
      { label: 'Crew Sizes', value: '2 to 6 person specialized removal crews' },
      { label: 'Equipment', value: 'High-cube box trucks, dump trailers, grapple loader' },
      { label: 'Disposal', value: 'Licensed transfer stations & certified Northland recyclers' },
      { label: 'Pricing', value: 'Volume-based pricing with transparent itemized quotes' },
    ],
    turnaround: 'Flexible scheduling, next-day cleanouts available',
    idealFor: 'Property management companies, realtors, estate trustees, and industrial tenants.',
  },
  {
    id: 'remodeling-site-work',
    title: 'Remodeling & Site Work',
    tagline: 'Commercial tenant improvements, site grading, and structural renovations.',
    category: 'General Contracting',
    description:
      'Bridging heavy site preparation with interior and exterior remodeling. Our crews execute site rough grading, trenching for utilities, concrete slab prep, commercial tenant fit-outs, and exterior facade modernization throughout Superior and Duluth.',
    image: HERO_IMAGE,
    serviceCode: 'remodeling_site_work',
    features: [
      'Site clearing, grading & sub-base gravel prep',
      'Commercial interior fit-outs & non-bearing wall reconfigurations',
      'Exterior siding, door, and loading dock renovations',
      'Turnkey project coordination from prep to finish',
    ],
    specs: [
      { label: 'Scope', value: 'Light commercial and comprehensive residential projects' },
      { label: 'Permits', value: 'Full municipal code compliance & inspection scheduling' },
      { label: 'Sub-base', value: 'Class 5 gravel, laser-level grading, compaction testing' },
      { label: 'Warranty', value: 'Workmanship guarantee on all structural site builds' },
    ],
    turnaround: 'Detailed project estimate within 48 hours',
    idealFor: 'Commercial building owners, expanding retail operations, and property investors.',
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Industrial Harbor Warehouse Selective Demolition',
    category: 'demolition',
    categoryLabel: 'Demolition',
    location: 'Superior Bayfront, WI',
    image: DEMO_IMAGE,
    challenge:
      'Deconstruct a 14,000 sq ft aging steel-frame shipping warehouse without disrupting adjacent active rail spurs or releasing waterfront dust.',
    solution:
      'Deployed hydraulic excavators equipped with shear attachments and continuous fine-mist water dust suppression. Segregated structural I-beams for scrap recycling.',
    result:
      'Completed 4 days ahead of scheduled date with 89% metal material diversion and zero rail stoppages.',
    equipmentUsed: ['CAT 330 Hydraulic Shear', 'Water Mist Dust Suppressor', '30-Yard Roll-Off Fleet'],
    year: '2025',
  },
  {
    id: 'proj-2',
    title: 'Twin Ports Logistics Center 30-Yard Container Program',
    category: 'roll_off',
    categoryLabel: 'Roll-Off',
    location: 'Duluth Industrial Park, MN',
    image: DUMPSTER_IMAGE,
    challenge:
      'Provide a continuous 24-hour dumpster swap rotation for a 45,000 sq ft distribution facility reroofing project with zero contractor downtime.',
    solution:
      'Staged five 30-yard heavy-duty roll-off containers on protective asphalt matting, coordinating twice-daily hauls synced with roofing shift changes.',
    result:
      'Hauled over 110 tons of roofing asphalt with 100% on-time container availability and zero pavement marring.',
    equipmentUsed: ['Heavy Roll-Off Tri-Axle Truck', '30-Yard High-Volume Bins', 'Pavement Protection Mats'],
    year: '2025',
  },
  {
    id: 'proj-3',
    title: 'Commercial Office Park Turf & Slope Revegetation',
    category: 'landscaping',
    categoryLabel: 'Landscaping',
    location: 'Hermantown, MN',
    image: HERO_IMAGE,
    beforeImage: HERO_IMAGE,
    afterImage: DUMPSTER_IMAGE,
    hasComparison: true,
    challenge:
      'Severe hillside erosion following utility trenching threatened the stability of a commercial parking lot during heavy Northland spring melt.',
    solution:
      'Re-graded the 25-degree embankment with engineered subsoil, installed coconut coir erosion netting, and hydroseeded a deep-root native fescue blend.',
    result:
      'Achieved dense 95% vegetative cover in 28 days with complete slope stabilization through subsequent heavy rains.',
    equipmentUsed: ['Finn Hydroseeder', 'Laser Grading Skid Steer', 'Slope Roller'],
    year: '2024',
  },
  {
    id: 'proj-4',
    title: 'Custom Heavy Equipment Bucket Hardfacing & Fabrication',
    category: 'metal_works',
    categoryLabel: 'Metal Works',
    location: 'CORE Fabrication Facility, Superior, WI',
    image: METAL_IMAGE,
    challenge:
      'A local excavation contractor suffered extensive abrasive wear on twin 4-yard excavator rock buckets during granite quarrying operations.',
    solution:
      'Rebuilt worn cutting edges with AR400 wear plate sections and laid a specialized multi-pass chromium carbide hardfacing grid.',
    result:
      'Extended bucket working lifespan by an estimated 250% at roughly one-third the cost of purchasing replacement assemblies.',
    equipmentUsed: ['Lincoln 400A MIG Welder', 'CNC Plasma Cutter', 'Hydraulic Ironworker'],
    year: '2024',
  },
  {
    id: 'proj-5',
    title: 'Medical Center 24/7 Zero-Tolerance Winter Ice Management',
    category: 'remodeling',
    categoryLabel: 'Remodeling',
    location: 'Duluth Medical District, MN',
    image: SNOW_IMAGE,
    challenge:
      'Keep ambulance emergency bays and patient accessibility walkways 100% bare pavement through a 22-inch Lake Superior blizzard event.',
    solution:
      'Dispatched a dedicated on-site team consisting of two plow trucks, a skid steer with high-capacity snow pusher, and continuous liquid de-icing spray.',
    result:
      'Zero slips, zero ambulance access delays, and full emergency bay clearance maintained without interruption.',
    equipmentUsed: ['Western WideOut Plow Trucks', 'Cat 259D3 Skid Steer', 'Liquid Anti-Ice Tanker'],
    year: '2025',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Mark Henderson',
    role: 'Lead Project Superintendent',
    organization: 'Northland Commercial Builders',
    location: 'Duluth, MN',
    quote:
      'When you are tearing down a building on the Duluth waterfront, you cannot afford dumpster trucks that fail to show up. CORE Advantage has been our primary roll-off and site partner for three years. Their drivers respect the site, drop containers exactly where needed, and swap them with zero delays.',
    serviceUsed: '30-Yard Roll-Off Fleet & Site Prep',
    rating: 5,
    date: 'February 2026',
  },
  {
    id: 't-2',
    author: 'Sarah Vandeberg',
    role: 'Facilities Director',
    organization: 'Superior Harbor Marine Logistics',
    location: 'Superior, WI',
    quote:
      'Their snow removal crew is hands-down the most dependable operation in the Twin Ports. When a lake-effect blizzard dumps a foot of snow overnight, our gates and loading docks are plowed and salted before our 6:00 AM freight trucks pull in.',
    serviceUsed: 'Commercial Snow & Ice Management',
    rating: 5,
    date: 'January 2026',
  },
  {
    id: 't-3',
    author: 'Dave Carlson',
    role: 'General Contractor & Residential Builder',
    organization: 'Carlson Custom Living',
    location: 'Hermantown, MN',
    quote:
      'CORE handled both our tear-down demolition and the new site grading for a recent custom build. Having one reliable local team that operates heavy excavators, supplies their own dumpsters, and does precision site prep saved our clients weeks of hassle.',
    serviceUsed: 'Demolition & Excavation Prep',
    rating: 5,
    date: 'November 2025',
  },
  {
    id: 't-4',
    author: 'Brenda O’Connell',
    role: 'Property Owner',
    organization: 'East End Residential Restoration',
    location: 'Duluth, MN',
    quote:
      'Rented a 15-yard dumpster for a major house renovation. The driver put wooden boards under the metal wheels so our paver driveway wasn’t scratched at all. Upfront price, no surprise fuel surcharges, and pleasant folks on the phone.',
    serviceUsed: '15-Yard Roll-Off Container',
    rating: 5,
    date: 'October 2025',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can I get a roll-off dumpster delivered in Duluth or Superior?',
    answer:
      'We offer same-day dispatch across the Twin Ports metropolitan area if your order is placed before 10:00 AM. For standard reservations, guaranteed next-day delivery is always available. If your project has strict time constraints, let our dispatch team know and we will lock in your delivery window.',
    category: 'dumpsters',
  },
  {
    id: 'faq-2',
    question: 'Do I need a city permit to place a dumpster on the street?',
    answer:
      'If the container is placed on your private driveway, private lot, or commercial jobsite, no permit is required. If the dumpster must sit in a public street, alleyway, or parking lane in Duluth or Superior, a temporary Right-of-Way (ROW) street permit is typically required. We can advise you on city-specific requirements during quote scheduling.',
    category: 'dumpsters',
  },
  {
    id: 'faq-3',
    question: 'What materials are not allowed in CORE Advantage dumpsters?',
    answer:
      'In compliance with Wisconsin DNR and Minnesota MPCA regulations, we cannot accept hazardous waste, liquid paints, chemical solvents, asbestos, propane cylinders, automobile batteries, motor oils, or bio-hazardous materials. Standard building lumber, drywall, roofing, fixtures, concrete, and household junk are fully accepted.',
    category: 'dumpsters',
  },
  {
    id: 'faq-4',
    question: 'What is your trigger depth for commercial snow removal?',
    answer:
      'Our standard commercial snow management agreements feature client-specified triggers—most frequently 1.0 inch or 2.0 inches of accumulation. We also provide zero-tolerance contracts for healthcare clinics and logistics yards where continuous de-icing and plowing are performed as snow falls.',
    category: 'snow_turf',
  },
  {
    id: 'faq-5',
    question: 'Can CORE Advantage handle both the demolition and the debris hauling?',
    answer:
      'Yes, that is our primary competitive advantage. Because we operate our own fleet of hydraulic excavators, grapple loaders, and roll-off trucks, you do not have to coordinate between a separate demolition crew and an outside hauler. We manage the demolition, dust mitigation, safety barriers, and disposal under one contract.',
    category: 'demolition',
  },
  {
    id: 'faq-6',
    question: 'Are you licensed and insured for commercial and industrial jobs?',
    answer:
      'Absolutely. CORE Advantage is fully licensed and carries comprehensive general liability, commercial auto fleet, and worker’s compensation insurance. We readily provide Certificates of Insurance (COI) listing your company or municipality as additional insured prior to mobilization.',
    category: 'general',
  },
];

export const COMPANY_MILESTONES = [
  {
    year: '2012',
    title: 'Twin Ports Roots Established',
    description: 'Began operations in Superior, Wisconsin with dedicated site services, hauling, and local property care.',
  },
  {
    year: '2016',
    title: 'Roll-Off Container Fleet Expansion',
    description: 'Invested in heavy-duty hook-lift trucks and custom steel 10, 15, 20, and 30-yard containers for Northland contractors.',
  },
  {
    year: '2019',
    title: 'Excavation & Structural Demolition Division',
    description: 'Added heavy hydraulic CAT excavators, concrete pulverizers, and certified operators for residential and commercial teardowns.',
  },
  {
    year: '2022',
    title: 'Superior Metal Fabrication Shop & Fleet Operations',
    description: 'Commissioned our dedicated Superior welding and fabrication bay to support structural steel work and equipment rebuilding.',
  },
  {
    year: 'Today',
    title: 'The Region’s Single-Source Contractor',
    description: 'Proudly serving thousands of residential, commercial, and industrial clients across Duluth, Superior, and the Twin Ports corridor.',
  },
];
