"use client"

import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('participation');
  const [animationKey, setAnimationKey] = useState(0);
  const [selectedCharity, setSelectedCharity] = useState<string | null>(null);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [selectedMetric]);

  // Data from Global Marathon Landscape document
  const participationData = [
    { year: 2015, London: 35900, NYC: 49000, Berlin: 41000, Tokyo: 36000, Sydney: 10000, Montreal: 17000 },
    { year: 2016, London: 38000, NYC: 50000, Berlin: 41000, Tokyo: 36000, Sydney: 10500, Montreal: 18000 },
    { year: 2017, London: 39800, NYC: 50000, Berlin: 42000, Tokyo: 36000, Sydney: 11000, Montreal: 19000 },
    { year: 2018, London: 40000, NYC: 52000, Berlin: 42500, Tokyo: 36500, Sydney: 11500, Montreal: 20000 },
    { year: 2019, London: 42000, NYC: 53627, Berlin: 44000, Tokyo: 38000, Sydney: 12000, Montreal: 21000 },
    { year: 2020, London: 0, NYC: 0, Berlin: 0, Tokyo: 0, Sydney: 0, Montreal: 0 },
    { year: 2021, London: 40000, NYC: 25000, Berlin: 25000, Tokyo: 20000, Sydney: 5000, Montreal: 15000 },
    { year: 2022, London: 42000, NYC: 51402, Berlin: 45000, Tokyo: 35000, Sydney: 5300, Montreal: 20000 },
    { year: 2023, London: 48000, NYC: 51543, Berlin: 48000, Tokyo: 35710, Sydney: 16900, Montreal: 21500 },
    { year: 2024, London: 53640, NYC: 55646, Berlin: 54280, Tokyo: 35710, Sydney: 24000, Montreal: 22000 },
    { year: 2025, London: 56640, NYC: 55000, Berlin: 54000, Tokyo: 36000, Sydney: 35000, Montreal: 22100 }
  ];

  const economicImpactData = [
    { city: 'Berlin', impact: 509, cost: 40, netBenefit: 469, year: 2024 },
    { city: 'London', impact: 485, cost: 38, netBenefit: 447, year: 2024 },
    { city: 'NYC', impact: 415, cost: 35, netBenefit: 380, year: 2024 },
    { city: 'Tokyo', impact: 380, cost: 30, netBenefit: 350, year: null },
    { city: 'Buenos Aires', impact: 85, cost: 15, netBenefit: 70, year: null },
    { city: 'Two Oceans', impact: 45, cost: 8, netBenefit: 37, year: null }
  ];

  const charityData = [
    { marathon: 'London', total: 1300, annual: 75.0 },
    { marathon: 'NYC', total: 600, annual: 47.0 },
    { marathon: 'Boston', total: 450, annual: 26.2 },
    { marathon: 'Chicago', total: 358, annual: 25.0 },
    { marathon: 'Mumbai', total: 80, annual: 5.2 },
    { marathon: 'Montreal', total: 15, annual: 1.0 }
  ];

  const charityDetails: Record<string, any> = {
    'London': {
      model: 'Dual-Charity Model',
      foundation: 'The London Marathon Foundation',
      foundationFocus: 'Funds sports and community projects',
      runnerFundraising: '£75 million raised in 2025 for countless causes',
      additionalInfo: 'Partners with other marathons globally to support growth and community projects (e.g., Cape Town Marathon)',
      breakdown: [
        'London Marathon Foundation (surplus profits)',
        'Sports & community projects',
        'Runner fundraising for various charities',
        'Global marathon development partnerships'
      ]
    },
    'Boston': {
      model: 'Official Charity Program',
      program: 'John Hancock Non-Profit Program',
      totalRaised: '$450 million+ cumulative since program inception',
      amount: '$26.2 million raised in 2024',
      partnerExamples: [
        'Dana-Farber Cancer Institute',
        'Massachusetts General Hospital',
        'American Red Cross',
        'Hundreds of official charity partners',
        'World\'s oldest annual marathon (since 1897)'
      ]
    },
    'Chicago': {
      model: 'Charity Partner Program',
      program: 'Official charity program',
      totalRaised: '$358 million since 2002',
      amount: 'Record $25 million raised in 2024',
      partnerExamples: [
        'American Cancer Society',
        'PAWS Chicago',
        'Alzheimer\'s Association',
        '180+ official charity partners',
        'Guaranteed entry through charity commitment'
      ]
    },
    'Montreal': {
      model: 'Community-Focused Multi-Charity Model',
      initiative: 'Du cœur à la course (Run with Heart)',
      amount: 'Nearly $1 million raised for 60+ charitable organizations in 2025',
      beneficiaries: [
        'Quebec Breast Cancer Foundation',
        'Chez Doris (day shelter for women)',
        'Quebec Athletics Federation (mandatory donation in registration)',
        'Local sports events & running development (event surplus)'
      ],
      focus: 'Over 60 local organizations supported annually'
    },
    'NYC': {
      model: 'Charity Partner Program',
      program: 'Official charity program since 2006',
      totalRaised: '$600 million+ for 1,000+ non-profits',
      organizer: 'NYRR (non-profit) funnels surplus to charitable causes and year-round running programs',
      partnerExamples: [
        'Lupus Research Alliance',
        'Fred\'s Team (Memorial Sloan Kettering Cancer Center)',
        '1,000+ non-profit partners',
        'Year-round NYRR running programs'
      ]
    },
    'Mumbai': {
      model: 'Various charitable causes',
      focus: 'Supporting community development and health initiatives',
      note: 'Funds distributed across multiple charitable organizations in India'
    }
  };

  const entryFeesData = [
    // Marathon Events
    { event: 'NYC Marathon', fee2024: 358, fee2025: 358, type: 'Marathon', tier: 'World Major' },
    { event: 'Sydney Marathon', fee2024: 145, fee2025: 375, type: 'Marathon', tier: 'WMM Candidate' },
    { event: 'London Marathon', fee2024: 280, fee2025: 280, type: 'Marathon', tier: 'World Major' },
    { event: 'Berlin Marathon', fee2024: 125, fee2025: 235, type: 'Marathon', tier: 'World Major' },
    { event: 'Tokyo Marathon', fee2024: 190, fee2025: 230, type: 'Marathon', tier: 'World Major' },
    { event: 'Montreal Marathon', fee2024: 173, fee2025: 178, type: 'Marathon', tier: 'Regional' },
    { event: 'Melbourne Marathon', fee2024: 145, fee2025: 145, type: 'Marathon', tier: 'Regional' },
    { event: 'Buenos Aires Marathon', fee2024: 100, fee2025: 120, type: 'Marathon', tier: 'Regional' },
    { event: 'Shanghai Marathon', fee2024: 45, fee2025: 45, type: 'Marathon', tier: 'Regional' },
    { event: 'Lagos Marathon', fee2024: 15, fee2025: 15, type: 'Marathon', tier: 'Regional' },
    // Half Marathon & Other Distances
    { event: 'Montreal Half', fee2024: 110, fee2025: 114, type: 'Half Marathon', tier: 'Regional' },
    { event: 'Bogotá Half', fee2024: 20, fee2025: 20, type: 'Half Marathon', tier: 'Regional' },
    { event: 'Montreal 10K/5K', fee2024: 65, fee2025: 66, type: '10K/5K', tier: 'Regional' },
    { event: 'Two Oceans Ultra', fee2024: 105, fee2025: 105, type: 'Ultra (56km)', tier: 'Regional' }
  ];

  const demandPressureData = [
    { event: 'London', applications: 1130000, spots: 50000, finishers: 56640, successRate: (56640 / 50000) * 100 },
    { event: 'Montreal', applications: 35000, spots: 22000, finishers: 22100, successRate: (22100 / 22000) * 100 },
    { event: 'NYC', applications: 120000, spots: 55000, finishers: 55000, successRate: (55000 / 55000) * 100 },
    { event: 'Berlin', applications: 100000, spots: 54000, finishers: 54000, successRate: (54000 / 54000) * 100 },
    { event: 'Sydney', applications: 79083, spots: 35000, finishers: 35000, successRate: (35000 / 35000) * 100 },
    { event: 'Tokyo', applications: 300000, spots: 38500, finishers: 36000, successRate: (36000 / 38500) * 100 }
  ];

  const growthComparison = [
    { event: 'Sydney 2022-25', growth: 560, type: 'Explosive' },
    { event: 'London 2015-25', growth: 57.7, type: 'Mature' },
    { event: 'Montreal 2015-25', growth: 30, type: 'Steady' }
  ];

  const cameroonProjections = [
    { metric: 'Economic Impact', conservative: 25, optimistic: 75 },
    { metric: 'Jobs Created', conservative: 2000, optimistic: 8000 },
    { metric: 'Tourism (000s)', conservative: 15, optimistic: 40 },
    { metric: 'Infrastructure ($M)', conservative: 50, optimistic: 200 }
  ];

  const cameroonCurrentState = {
    name: 'Mount Cameroon Race of Hope',
    distance: '38 km (up & back)',
    elevation: '4,095m summit',
    participants: 700,
    prizePool: 22, // million FCFA for top 3
    economic: 'Minimal regional impact',
    status: 'Regional ultra-endurance race'
  };

  const cameroonFullMarathonProjection = {
    name: 'Cameroon International Marathon',
    distance: '42.2 km (standard marathon)',
    participants: { year1: 5000, year3: 12000, year5: 20000 },
    economic: { conservative: 25, optimistic: 75 },
    jobs: { conservative: 2000, optimistic: 8000 },
    tourism: { conservative: 15000, optimistic: 40000 },
    infrastructure: { conservative: 50, optimistic: 200 },
    requirements: [
      'Course certification & flat route development',
      'Transportation infrastructure investment',
      'International hotel capacity expansion',
      'Government backing & regulatory support',
      'Partnership with established race organizers',
      'Marketing to international running community',
      'West African running talent showcase'
    ]
  };

  const revenueBreakdown = [
    { source: 'Entry Fees', percentage: 35, amount: 140 },
    { source: 'Sponsorships', percentage: 35, amount: 140 },
    { source: 'Merchandise & Expo', percentage: 15, amount: 60 },
    { source: 'Media Rights', percentage: 10, amount: 40 },
    { source: 'Other', percentage: 5, amount: 20 }
  ];

  const sources = [
    '"Global Marathon Landscape: A Synthesis of Participation, Economic, and Philanthropic Trends." Unpublished comprehensive report, 2025.',
    '"About London Marathon Events." London Marathon Group, www.londonmarathongroup.org/about-london-marathon-events.',
    '"Access Bank Lagos City Marathon - Lagos, Nigeria - 2/14/2026 - My BEST Runs - Worlds Best Road Races." My Best Runs, mybestruns.com/AccessBankLagosCityMarat?details=Y.',
    '"ARA Conducts New Economic Impact of the NYC Marathon." Audience Research & Analysis, audienceresearch.com.',
    '"Berlin Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/Berlin_Marathon.',
    '"Bogotá Half Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/Bogot%C3%A1_Half_Marathon.',
    '"BMW BERLIN-MARATHON 2025 | Marathon Tours & Travel USA." Marathon Tours & Travel, marathontours.com/races/bmw-berlin-marathon-2025.',
    '"Buenos Aires Marathon." MarathonView, marathonview.net/series/77.',
    '"Buenos Aires Marathon - MarathonView." MarathonView, marathonview.net/buenos-aires-marathon.',
    '"Cape Town Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/Cape_Town_Marathon.',
    '"Everyone runs to Rio | Distance Running magazine 2025 Edition 1 | Race previews - AIMS." AIMS World Running, aims-worldrunning.org/articles/324-everyone-runs-to-rio.html.',
    '"The \'Easiest\' Way to Get in to The Tokyo Marathon." The Runner Beans, therunnerbeans.com/the-easiest-way-to-get-in-to-the-tokyo-marathon/.',
    '"The 15 Best Marathons in Europe Worth Every Penny." HalfMarathons.net, halfmarathons.net/best-marathons-in-europe/.',
    '"42K Buenos Aires, 24 Sep 2023 | World\'s Marathons." World\'s Marathons, worldsmarathons.com/marathon/42k-buenos-aires.',
    '"50000 runners jostle for $50000 as lagos marathon begins." Punch Newspapers, 6 Feb. 2016, punchng.com/50000-runners-jostle-for-50000-as-lagos-marathon-begins/.',
    '"Global Road Racing Dynamics: A Comprehensive Analysis of Major Marathon Events and Development Opportunities." Unpublished report, 2025.',
    '"Global Road Running Events: Montréal\'s Strategic Growth." Unpublished report, 2025.',
    '"A guide to the best European marathons - SportsCover Direct." SportsCover Direct, www.sportscoverdirect.com/blog/a-guide-to-the-best-european-marathons/.',
    '"Guide to the Montreal Marathon - where it starts and how to enter." GoFundMe, www.gofundme.com/en-ca/c/blog/guide-to-the-montreal-marathon-where-it-starts-and-how-to-enter.',
    '"Here Are The 10 Biggest Marathons In The World." Marathon Handbook, marathonhandbook.com/biggest-marathons-in-the-world/.',
    '"How to Enter the London Marathon Ballot: Key Information for 2025." JustGiving Blog, www.justgiving.com/blog/fundraising-ideas/london-marathon-ballot-2025/.',
    '"Lace up for the 2024 Buenos Aires Marathon." Buenos Aires Herald, 18 Sept. 2024, buenosairesherald.com/sports/lace-up-for-the-2024-buenos-aires-marathon.',
    '"Lagos City Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/Lagos_City_Marathon.',
    '"Lawsuit Settlement Will Affect Price of Entry at New York City Marathon." Runner\'s World, 23 May 2016, www.runnersworld.com/news/a20822034/lawsuit-settlement-will-affect-price-of-entry-at-new-york-city-marathon/.',
    '"London Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/London_Marathon.',
    '"London Marathon - Race Results." MarathonGuide.com, marathonguide.com/races/run/london-marathon-25/2024/results.',
    '"London Marathon FAQs." BUXTON Water, www.buxtonwater.co.uk/sweat-and-tears/2024-competition/faqs.',
    '"London Marathon raises record £73.5 million for charity | The Independent." The Independent, 23 Sept. 2024, www.the-independent.com/news/uk/caroline-flack-samaritans-piranha-joel-dommett-charities-b2618688.html.',
    '"The 2025 London Marathon ballot is open – here\'s everything you..." Yahoo Sports, 20 Apr. 2025, sports.yahoo.com/2025-london-marathon-ballot-open-093446878.html.',
    '"London Marathon 2025: Tigst Assefa\'s world record, historic number of finishers, and Sabastian Sawe\'s triumph." World Marathoner, worldmarathoner.com/en/london-marathon-2025-tigst-assefas-world-record-historic-number-of-finishers-and-sabastian-sawes-triumph/.',
    '"Major Road Running Events in Global Cities: Participation, Economics, and Impact." Unpublished report, 2025.',
    '"Marathon Beneva de Montréal." Fondation Réa, fondationrea.ca/en/event/marathon-beneva-de-montreal/.',
    '"Marathon Beneva de Montréal - Wikipedia." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/Marathon_Beneva_de_Montr%C3%A9al.',
    '"Marathon Beneva de Montréal - 2025 Edition - Fundraising organizations." Race Roster, raceroster.com/events/2025/86608/marathon-beneva-de-montreal/fundraising-organizations.',
    '"Marathon Beneva de Montreal 2025." Marathon Runners Diary, www.marathonrunnersdiary.com/races/international-marathons/montreal-international-marathon.php.',
    '"Marathon Boom Sweeps China As Thousands Hit The Streets For \'Super Marathon Weekend\'." Bernama, www.bernama.com/en/news.php?id=2359209.',
    '"Marathon de Montreal - MarathonView." MarathonView, marathonview.net/series/152.',
    '"Melbourne Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/Melbourne_Marathon.',
    '"Montreal runners set off in 33rd annual marathon." CityNews Montreal, montreal.citynews.ca.',
    '"MONTREAL RUNNING RACES 2025 AND 2026." Go! Running Tours, gorunningtours.com/p/montreal-running-races/.',
    '"Montreal\'s Marathon - You get the race you prepare for." Reddit, www.reddit.com/r/running/comments/7261d2/montreals_marathon_you_get_the_race_you_prepare/.',
    '"MTA wants to charge NYC Marathon for shutting down Verrazzano-Narrows Bridge." CBS News, 8 Feb. 2024, www.cbsnews.com/newyork/news/nyc-marathon-congestion-pricing-new-york-road-runners/.',
    '"Mumbai is all set for the iconic 20th edition of Tata Mumbai Marathon." Procam International, tatamumbaimarathon.procam.in/news-press/mumbai-is-all-set-for-the-iconic-20th-edition-of-tata-mumbai-marathon/.',
    '"New York City Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/New_York_City_Marathon.',
    '"NGOs, Corporates, and citizens join forces to raise ₹43 crores for Social Good at the Tata Mumbai Marathon 2025." Tata Mumbai Marathon, tatamumbaimarathon.procam.in/news-press/ngos-corporates-and-citizens-join-forces-to-raise-43-crores-for-social-good-at-the-tata-mumbai-marathon-2025/.',
    '"On your marks: the Montréal marathon is back!" Tourisme Montréal, blog.mtl.org/en/on-your-marks-the-montreal-marathon-is-back.',
    '"Registration for the BMW BERLIN-MARATHON." BMW Berlin-Marathon, www.bmw-berlin-marathon.com/en/your-registration/registration/.',
    '"Run for Charity - Sanlam Cape Town Marathon." Sanlam Cape Town Marathon, capetownmarathon.com/run-for-charity/.',
    '"Sanlam Cape Town Marathon | Run with confidence." Sanlam Cape Town Marathon, capetownmarathon.com.',
    '"Sanlam Cape Town Marathon becomes Abbott World Marathon Majors candidate race." World Marathon Majors, www.worldmarathonmajors.com/content-hub/cape-town-marathon-becomes-abbott-world-marathon-majors-candidate-race.',
    '"Sanlam Cape Town Marathon in South Africa." Facebook, www.facebook.com/groups/1596734947469497/posts/2213092532500399/.',
    '"Sanlam Cape Town Marathon Sells Out at 24000 Marathon Entries." Sanlam Cape Town Marathon, capetownmarathon.com/sells-out-at-24000-marathon-entries/.',
    '"Sydney Marathon." Wikipedia, The Free Encyclopedia, en.wikipedia.org/wiki/Sydney_Marathon.',
    '"Sydney Marathon - MarathonView." MarathonView, marathonview.net/sydney-marathon.',
    '"Sydney Marathon ballot overrun with international entries." NSW Government, 27 June 2025, www.nsw.gov.au/departments-and-agencies/dciths/ministerial-media-releases/sydney-marathon-ballot-overrun-international-entries.',
    '"Sydney Marathon Draws Record 35,000 Runners After Status Upgrade." Bloomberg, 31 Aug. 2025, www.bloomberg.com/news/articles/2025-08-31/sydney-marathon-draws-record-35-000-runners-after-status-upgrade.',
    '"Sydney Marathon\'s debut as major is timed perfectly with Australia\'s running boom." The Guardian, 28 Aug. 2025, www.theguardian.com/sport/blog/2025/aug/28/sydney-marathons-debut-as-major-is-timed-perfectly-with-australias-running-boom.',
    '"Tata Mumbai Marathon 2025." RaceMart, racemart.in/event/tata-mumbai-marathon/.',
    '"TCS London Marathon 2025 | Cancer Research UK." Cancer Research UK, www.cancerresearchuk.org/get-involved/find-an-event/tcs-london-marathon-2025.',
    '"2022 TCS New York City Marathon attracts unparalleled interest." ABC7 New York, 16 Mar. 2022, abc7ny.com/post/new-york-city-marathon-2022-nyc-charity-drawing/11692781/.',
    '"2025 TCS New York City Marathon." Fred\'s Team, www.fredsteam.org/events/2025-tcs-new-york-city-marathon.',
    '"2025 TCS New York City Marathon." Parkinson\'s Foundation, www.parkinson.org/get-involved/team-parkinson/NYCMarathon2025.',
    '"2025 TCS New York City Marathon." The Pink Agenda, www.thepinkagenda.org/events/2025-tcs-new-york-city-marathon/.',
    '"TCS New York City Marathon." Commonpoint, www.commonpoint.org/tcs-new-york-city-marathon.',
    '"TCS New York City Marathon." Lupus Research Alliance, www.lupusresearch.org/tcsnycmarathon/.',
    '"The Beneva Montreal Half Marathon | September 21, 2025." Courons Mtl, couronsmtl.com/en/evenement/demi-marathon-de-montreal/.',
    '"The Economics Behind Marathons." Investopedia, www.investopedia.com/articles/investing/100815/economics-behind-marathons.asp.',
    '"TMM | Open 10K | FAQs." Tata Mumbai Marathon, tatamumbaimarathon.procam.in/race-category/open-10k/faqs/.',
    '"TMM FAQs." United Way of Mumbai, www.unitedwaymumbai.org/tmm-faq.htm.',
    '"Tokyo Marathon 2024 Charity Results." Tokyo Marathon Foundation, www.marathon.tokyo/en/about/past/2024/charity_results/.',
    '"Tokyo Marathon 2026 Charity." Tokyo Marathon Foundation, 27 Mar. 2025, www.marathon.tokyo/en/news/detail/news_20250327150022.html.',
    '"Tokyo Marathon 2026 Charity Program." Tokyo Marathon Foundation, 23 June 2025, www.marathon.tokyo/en/news/detail/news_20250623150002.html.',
    '"2023 Top 100 Largest Races." RunSignup, info.runsignup.com/2023/12/21/2023-top-100-largest-races/.',
    '"Totalsports Two Oceans Marathon - Entries OPEN for the 2026." Two Oceans Marathon, www.twooceansmarathon.org.za/events/ultra-marathon/.',
    '"Trail Runners Revel in Sanlam Cape Town Marathon Crowds." Sanlam Cape Town Marathon, capetownmarathon.com/trail-runners-revel/.',
    '"Two Oceans Marathon." Two Oceans Marathon, www.twooceansmarathon.org.za.',
    '"Volunteers | London Marathon Events." London Marathon Events, www.londonmarathonevents.co.uk/mini-london-marathon/volunteers.',
    '"World Marathon Majors 2025 Entry Fees – Comparing the Costs of Running the World\'s Biggest Marathons." World Marathoner, worldmarathoner.com/en/world-marathon-majors-2025-entry-fees-comparing-the-costs-of-running-the-worlds-biggest-marathons/.',
    '"79000 people applied to run for the 35000 spots available in Sydney." Reddit, www.reddit.com/r/AdvancedRunning/comments/1n242uk/confirmed_by_the_race_director_79000_people/.'
  ];

  const COLORS = ['#000000', '#4B5563', '#9CA3AF', '#D1D5DB', '#F3F4F6', '#EF4444'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border-4 border-black p-4 shadow-xl">
          <p className="font-bold text-black">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const EconomicTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = economicImpactData.find(d => d.city === label);
      return (
        <div className="bg-white border-4 border-black p-4 shadow-xl">
          <p className="font-bold text-black">{label}</p>
          {dataPoint?.year && (
            <p className="text-xs text-gray-500 mb-1">Data Year: {dataPoint.year}</p>
          )}
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ${typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}M USD
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 border-b-8 border-black pb-6">
        <h1 className="text-6xl md:text-8xl font-black text-black mb-2">MARATHON</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700">GLOBAL LANDSCAPE ANALYSIS</h2>
        <p className="text-sm text-gray-500 mt-2">Participation, Economics, and Impact | Data: 2015-2025</p>
      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
        {['participation', 'economics', 'charity', 'fees', 'demand', 'revenue', 'cameroon', 'sources'].map((metric) => (
          <button
            key={metric}
            onClick={() => setSelectedMetric(metric)}
            className={`px-4 py-3 font-bold uppercase transition-all duration-300 border-4 text-sm ${
              selectedMetric === metric
                ? 'bg-black text-white border-black shadow-xl transform -translate-y-1'
                : 'bg-white text-black border-gray-300 hover:border-black'
            }`}
          >
            {metric === 'cameroon' ? 'What If?' : metric}
          </button>
        ))}
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-black text-white p-6 border-4 border-black">
          <h4 className="text-xl font-black mb-2">RECORD FINISHERS</h4>
          <p className="text-3xl font-black">56,640</p>
          <p className="text-sm mt-2">London Marathon 2025 | The 50,000+ Club now includes 3 events</p>
        </div>
        <div className="bg-gray-100 p-6 border-4 border-black">
          <h4 className="text-xl font-black mb-2">CHARITY LEADER</h4>
          <p className="text-3xl font-black">£75M</p>
          <p className="text-sm mt-2">London 2025 | World's most powerful single-day fundraising platform</p>
        </div>
        <div className="bg-white p-6 border-4 border-black">
          <h4 className="text-xl font-black mb-2">DEMAND PEAK</h4>
          <p className="text-3xl font-black">1.13M</p>
          <p className="text-sm mt-2">London 2026 applications | Only 4.4% success rate via ballot</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Participation Trends */}
        {selectedMetric === 'participation' && (
          <>
            <div className="col-span-1 lg:col-span-2 bg-gray-50 border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">PARTICIPATION EVOLUTION (2015-2025)</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={participationData} key={animationKey} margin={{ left: 30, right: 20, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="0" stroke="#000" strokeWidth={2} />
                  <XAxis dataKey="year" stroke="#000" strokeWidth={2} />
                  <YAxis stroke="#000" strokeWidth={2} label={{ value: 'Total Number of Finishers', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' }, dx: -15 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontWeight: 'bold' }} />
                  <Area type="monotone" dataKey="London" stackId="1" stroke="#000" fill="#000" strokeWidth={3} animationDuration={1500} />
                  <Area type="monotone" dataKey="NYC" stackId="1" stroke="#4B5563" fill="#4B5563" strokeWidth={3} animationDuration={1500} />
                  <Area type="monotone" dataKey="Berlin" stackId="1" stroke="#9CA3AF" fill="#9CA3AF" strokeWidth={3} animationDuration={1500} />
                  <Area type="monotone" dataKey="Tokyo" stackId="1" stroke="#D1D5DB" fill="#D1D5DB" strokeWidth={3} animationDuration={1500} />
                  <Area type="monotone" dataKey="Sydney" stackId="1" stroke="#EF4444" fill="#EF4444" strokeWidth={3} animationDuration={1500} />
                  <Area type="monotone" dataKey="Montreal" stackId="1" stroke="#F59E0B" fill="#F59E0B" strokeWidth={3} animationDuration={1500} />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-500 mt-2">*2020 cancellations due to COVID-19 | The 50,000+ Finisher Club: London (56,640), NYC (55,646), Berlin (54,280)</p>
            </div>
            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">GROWTH TRAJECTORIES</h3>
              <div className="space-y-4">
                {growthComparison.map((item) => (
                  <div key={item.event}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{item.event}</span>
                      <span className="font-mono text-2xl">{item.growth}%</span>
                    </div>
                    <div className="bg-gray-800 h-3">
                      <div className="bg-white h-3" style={{ width: `${Math.min(item.growth / 6, 100)}%` }} />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{item.type} Growth Pattern</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">Sydney shows explosive 560% growth (5,300→35,000) | London mature expansion 57.7%</p>
            </div>
          </>
        )}

        {/* Economic Impact */}
        {selectedMetric === 'economics' && (
          <>
            <div className="bg-gray-50 border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">ANNUAL ECONOMIC IMPACT (MILLIONS USD)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={economicImpactData} key={animationKey}>
                  <CartesianGrid strokeDasharray="0" stroke="#000" strokeWidth={1} />
                  <XAxis dataKey="city" stroke="#000" strokeWidth={2} />
                  <YAxis stroke="#000" strokeWidth={2} />
                  <Tooltip content={<EconomicTooltip />} />
                  <Bar dataKey="impact" fill="#000" animationDuration={1000} />
                  <Bar dataKey="cost" fill="#EF4444" animationDuration={1200} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-500 mt-2">Berlin (2024): $509M | London (2024): $485M | NYC (2024): $415M | Hover over bars for data year details</p>
            </div>
            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">NET ECONOMIC BENEFIT</h3>
              <div className="space-y-3">
                {economicImpactData.map((city) => (
                  <div key={city.city} className="flex justify-between items-center">
                    <span className={`font-bold ${city.city === 'Cameroon (Proj.)' ? 'text-red-500' : ''}`}>
                      {city.city}{city.year ? ` (${city.year})` : ''}
                    </span>
                    <div className="flex items-center">
                      <div
                        className={`h-4 mr-2 ${city.city === 'Cameroon (Proj.)' ? 'bg-red-500' : 'bg-white'}`}
                        style={{ width: `${(city.netBenefit / 470) * 150}px` }}
                      />
                      <span className="font-mono">${city.netBenefit}M</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">Revenue minus organizational costs | Major ROI for host cities | Red = Projection</p>
            </div>
          </>
        )}

        {/* Charity Impact */}
        {selectedMetric === 'charity' && (
          <>
            <div className="col-span-1 lg:col-span-2 bg-gray-50 border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">CUMULATIVE CHARITY RAISED (MILLIONS)</h3>
              <p className="text-sm text-gray-600 mb-4">Click on a slice to see detailed charity allocation</p>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart key={animationKey}>
                  <Pie
                    data={charityData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={(entry) => `${entry.marathon}: ${entry.total}M`}
                    outerRadius={140}
                    innerRadius={0}
                    fill="#000"
                    dataKey="total"
                    animationDuration={1500}
                    strokeWidth={3}
                    stroke="#fff"
                    onClick={(data) => setSelectedCharity(data.marathon)}
                    cursor="pointer"
                  >
                    {charityData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        opacity={selectedCharity && selectedCharity !== entry.marathon ? 0.3 : 1}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-500 mt-2">London: £1.3B total since 1981 | Boston: $450M+ | Chicago: $358M since 2002 | World's leading philanthropic platforms</p>
            </div>

            {selectedCharity && (
              <div className="col-span-1 lg:col-span-2 bg-black text-white border-4 border-black p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black">{selectedCharity.toUpperCase()} MARATHON - CHARITY ALLOCATION</h3>
                  <button
                    onClick={() => setSelectedCharity(null)}
                    className="text-white hover:text-gray-300 text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 border-2 border-white">
                    <p className="font-bold text-xl mb-2">Model</p>
                    <p className="text-sm">{charityDetails[selectedCharity].model}</p>
                  </div>

                  {charityDetails[selectedCharity].foundation && (
                    <div className="bg-gray-900 p-4 border-2 border-white">
                      <p className="font-bold text-xl mb-2">{charityDetails[selectedCharity].foundation}</p>
                      <p className="text-sm mb-2">{charityDetails[selectedCharity].foundationFocus}</p>
                      <p className="text-sm text-gray-300">{charityDetails[selectedCharity].runnerFundraising}</p>
                      {charityDetails[selectedCharity].additionalInfo && (
                        <p className="text-sm text-gray-300 mt-2">{charityDetails[selectedCharity].additionalInfo}</p>
                      )}
                    </div>
                  )}

                  {charityDetails[selectedCharity].initiative && (
                    <div className="bg-gray-900 p-4 border-2 border-white">
                      <p className="font-bold text-xl mb-2">{charityDetails[selectedCharity].initiative}</p>
                      <p className="text-sm mb-2">{charityDetails[selectedCharity].amount}</p>
                      <p className="text-sm text-gray-300">{charityDetails[selectedCharity].focus}</p>
                    </div>
                  )}

                  {charityDetails[selectedCharity].program && (
                    <div className="bg-gray-900 p-4 border-2 border-white">
                      <p className="font-bold text-xl mb-2">{charityDetails[selectedCharity].program}</p>
                      <p className="text-sm mb-2">{charityDetails[selectedCharity].totalRaised}</p>
                      <p className="text-sm text-gray-300">{charityDetails[selectedCharity].organizer}</p>
                    </div>
                  )}

                  <div className="bg-gray-900 p-4 border-2 border-white">
                    <p className="font-bold text-xl mb-3">Beneficiaries & Allocation</p>
                    <ul className="space-y-2">
                      {charityDetails[selectedCharity].breakdown?.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="text-red-500 mr-2">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                      {charityDetails[selectedCharity].beneficiaries?.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="text-red-500 mr-2">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                      {charityDetails[selectedCharity].partnerExamples?.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="text-red-500 mr-2">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                      {charityDetails[selectedCharity].note && (
                        <li className="text-sm flex items-start">
                          <span className="text-red-500 mr-2">▸</span>
                          <span>{charityDetails[selectedCharity].note}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Entry Fees */}
        {selectedMetric === 'fees' && (
          <>
            <div className="col-span-1 lg:col-span-2 bg-gray-50 border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">ENTRY FEES: 2024 vs 2025 COMPARISON (USD)</h3>
              <p className="text-sm text-gray-600 mb-4">International non-member rates shown | Grouped by event type</p>

              {/* Marathon Events */}
              <div className="mb-8">
                <h4 className="text-lg font-black mb-3 text-black">MARATHON (42.2K)</h4>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart
                    data={entryFeesData.filter(e => e.type === 'Marathon')}
                    key={animationKey}
                    margin={{ bottom: 80, left: 20, right: 20 }}
                  >
                    <CartesianGrid strokeDasharray="0" stroke="#000" strokeWidth={1} />
                    <XAxis
                      dataKey="event"
                      stroke="#000"
                      strokeWidth={2}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      interval={0}
                      tick={{ fontSize: 11 }}
                    />
                    <YAxis stroke="#000" strokeWidth={2} label={{ value: 'Fee (USD)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontWeight: 'bold' }} />
                    <Bar dataKey="fee2024" fill="#4B5563" name="2024" animationDuration={1000} />
                    <Bar dataKey="fee2025" fill="#000" name="2025" animationDuration={1200} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Other Distance Events */}
              <div>
                <h4 className="text-lg font-black mb-3 text-black">OTHER DISTANCES</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={entryFeesData.filter(e => e.type !== 'Marathon')}
                    key={animationKey + 1000}
                    margin={{ bottom: 80, left: 20, right: 20 }}
                  >
                    <CartesianGrid strokeDasharray="0" stroke="#000" strokeWidth={1} />
                    <XAxis
                      dataKey="event"
                      stroke="#000"
                      strokeWidth={2}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      interval={0}
                      tick={{ fontSize: 11 }}
                    />
                    <YAxis stroke="#000" strokeWidth={2} label={{ value: 'Fee (USD)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontWeight: 'bold' }} />
                    <Bar dataKey="fee2024" fill="#4B5563" name="2024" animationDuration={1000} />
                    <Bar dataKey="fee2025" fill="#000" name="2025" animationDuration={1200} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex gap-6 mt-4 text-xs flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600"></div>
                  <span>2024 Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-black"></div>
                  <span>2025 Fees</span>
                </div>
              </div>
            </div>
            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">PRICING TRENDS & INSIGHTS</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-red-500 mb-2">Significant Increases</p>
                  <p className="text-sm">Sydney: +158% ($145→$375) | Berlin: +88% ($125→$235) | Tokyo: +21% ($190→$230)</p>
                </div>
                <div>
                  <p className="font-bold mb-2">World Marathon Majors Premium</p>
                  <p className="text-sm">$230-$358 range maintained | Elite events commanding premium pricing</p>
                </div>
                <div>
                  <p className="font-bold mb-2">WMM Candidate Strategy</p>
                  <p className="text-sm">Sydney's aggressive pricing ($375) signals premium positioning after major status upgrade</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Stable Regional Markets</p>
                  <p className="text-sm">Melbourne, Shanghai, Lagos maintain consistent pricing to support participation</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Multi-Distance Accessibility</p>
                  <p className="text-sm">Montreal: Marathon ($178), Half ($114), 10K/5K ($66) - tiered entry points</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Mass Participation Model</p>
                  <p className="text-sm">Lagos ($15), Bogotá ($20), Shanghai ($45) prioritize accessibility over premium pricing</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Fee Structure Context</p>
                  <p className="text-sm">Fees shown are international non-member rates | Resident rates often 30-70% lower</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Demand Pressure */}
        {selectedMetric === 'demand' && (
          <>
            <div className="col-span-1 lg:col-span-2 bg-gray-50 border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">DEMAND vs. SUPPLY PRESSURE</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={demandPressureData} key={animationKey}>
                  <CartesianGrid strokeDasharray="0" stroke="#000" strokeWidth={2} />
                  <XAxis dataKey="event" stroke="#000" strokeWidth={2} />
                  <YAxis stroke="#000" strokeWidth={2} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontWeight: 'bold' }} />
                  <Bar dataKey="applications" fill="#4B5563" animationDuration={1000} />
                  <Bar dataKey="spots" fill="#000" animationDuration={1200} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-500 mt-2">Extreme scarcity drives economic & philanthropic models</p>
            </div>
            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">FINISH RATES</h3>
              <p className="text-sm text-gray-300 mb-4">Percentage of spots that resulted in finishers (Finishers ÷ Spots × 100)</p>
              <div className="space-y-4">
                {demandPressureData.map((item) => (
                  <div key={item.event}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{item.event}</span>
                      <span className="font-mono text-2xl">{item.successRate.toFixed(1)}%</span>
                    </div>
                    <div className="bg-gray-800 h-3">
                      <div className="bg-white h-3" style={{ width: `${Math.min(item.successRate, 100)}%` }} />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{item.finishers.toLocaleString()} finishers from {item.spots.toLocaleString()} spots</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">London: 113.3% finish rate (56,640 finishers exceeded 50K spots) | Most events run at ~100% capacity</p>
            </div>
          </>
        )}

        {/* Revenue Diversification */}
        {selectedMetric === 'revenue' && (
          <>
            <div className="col-span-1 lg:col-span-2 bg-gray-50 border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">MARATHON REVENUE DIVERSIFICATION</h3>
              <p className="text-sm text-gray-600 mb-4">Typical revenue breakdown for major marathons (based on $400M example event)</p>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart key={animationKey}>
                  <Pie
                    data={revenueBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={(entry) => `${entry.source}: ${entry.percentage}%`}
                    outerRadius={140}
                    innerRadius={60}
                    fill="#000"
                    dataKey="percentage"
                    animationDuration={1500}
                    strokeWidth={3}
                    stroke="#fff"
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-500 mt-2">Entry fees are significant but represent only about 1/3 of total revenue | Diversification reduces risk</p>
            </div>

            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">REVENUE SOURCE BREAKDOWN</h3>
              <div className="space-y-4">
                {revenueBreakdown.map((source) => (
                  <div key={source.source}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{source.source}</span>
                      <span className="font-mono text-xl">{source.percentage}%</span>
                    </div>
                    <div className="bg-gray-800 h-3 mb-1">
                      <div className="bg-white h-3" style={{ width: `${source.percentage}%` }} />
                    </div>
                    <p className="text-xs text-gray-400">~${source.amount}M in a $400M revenue event</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white text-black border-2 border-white">
                <p className="font-black text-lg mb-2">Strategic Diversification Benefits</p>
                <ul className="text-sm space-y-1">
                  <li>• Reduces dependency on single revenue stream</li>
                  <li>• Allows for competitive entry pricing</li>
                  <li>• Creates multiple stakeholder partnerships</li>
                  <li>• Provides buffer during economic downturns</li>
                  <li>• Enables reinvestment in event quality</li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Cameroon What If Scenario */}
        {selectedMetric === 'cameroon' && (
          <>
            <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-black p-6">
              <h3 className="text-3xl font-black mb-4 text-orange-900">WHAT IF CAMEROON HAD A FULL MARATHON?</h3>
              <p className="text-sm text-gray-700 mb-6">
                West Africa produces elite distance runners but lacks a major international marathon.
                What if the Mount Cameroon Race of Hope evolved into a world-class 42.2km event?
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Current State */}
                <div className="bg-white border-4 border-black p-5">
                  <h4 className="text-xl font-black mb-3 text-red-800">CURRENT STATE</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b-2 border-gray-200 pb-1">
                      <span className="font-bold">Event:</span>
                      <span>{cameroonCurrentState.name}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-200 pb-1">
                      <span className="font-bold">Distance:</span>
                      <span>{cameroonCurrentState.distance}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-200 pb-1">
                      <span className="font-bold">Summit:</span>
                      <span>{cameroonCurrentState.elevation}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-200 pb-1">
                      <span className="font-bold">Participants:</span>
                      <span className="text-red-600 font-bold">{cameroonCurrentState.participants}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-200 pb-1">
                      <span className="font-bold">Prize Pool:</span>
                      <span>{cameroonCurrentState.prizePool}M FCFA</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="font-bold">Status:</span>
                      <span>{cameroonCurrentState.status}</span>
                    </div>
                  </div>
                </div>

                {/* Projected State */}
                <div className="bg-black text-white border-4 border-black p-5">
                  <h4 className="text-xl font-black mb-3 text-green-400">PROJECTED FULL MARATHON</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b-2 border-gray-700 pb-1">
                      <span className="font-bold">Event:</span>
                      <span>{cameroonFullMarathonProjection.name}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-700 pb-1">
                      <span className="font-bold">Distance:</span>
                      <span>{cameroonFullMarathonProjection.distance}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-700 pb-1">
                      <span className="font-bold">Year 1:</span>
                      <span className="text-green-400 font-bold">{cameroonFullMarathonProjection.participants.year1.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-700 pb-1">
                      <span className="font-bold">Year 3:</span>
                      <span className="text-green-400 font-bold">{cameroonFullMarathonProjection.participants.year3.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-700 pb-1">
                      <span className="font-bold">Year 5:</span>
                      <span className="text-green-400 font-bold">{cameroonFullMarathonProjection.participants.year5.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="font-bold">Growth:</span>
                      <span className="text-yellow-400 font-bold">2,757% over 5 years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Economic Projections Chart */}
              <div className="bg-white border-4 border-black p-5">
                <h4 className="text-2xl font-black mb-4">ECONOMIC IMPACT PROJECTIONS</h4>
                <div className="space-y-6">
                  {cameroonProjections.map((proj, idx) => (
                    <div key={idx} className="border-2 border-black p-4">
                      <h5 className="font-black text-lg mb-3">{proj.metric}</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Conservative</p>
                          <div className="bg-gray-200 h-8 flex items-center">
                            <div
                              className="bg-orange-500 h-8 flex items-center justify-end pr-2"
                              style={{ width: `${(proj.conservative / Math.max(proj.conservative, proj.optimistic)) * 100}%` }}
                            >
                              <span className="text-white font-bold text-sm">{proj.conservative.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Optimistic</p>
                          <div className="bg-gray-200 h-8 flex items-center">
                            <div
                              className="bg-green-600 h-8 flex items-center justify-end pr-2"
                              style={{ width: `${(proj.optimistic / Math.max(proj.conservative, proj.optimistic)) * 100}%` }}
                            >
                              <span className="text-white font-bold text-sm">{proj.optimistic.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        {proj.metric === 'Economic Impact' && 'Annual impact in millions USD'}
                        {proj.metric === 'Jobs Created' && 'Direct and indirect employment'}
                        {proj.metric === 'Tourism (000s)' && 'International tourist arrivals annually'}
                        {proj.metric === 'Infrastructure ($M)' && 'Required investment in USD millions'}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">Conservative estimates based on regional comparables | Optimistic assumes strong government & private investment</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-black text-white border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">SUCCESS REQUIREMENTS</h3>
              <div className="space-y-3">
                {cameroonFullMarathonProjection.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-black bg-opacity-50 p-3 border-2 border-green-500">
                    <span className="text-green-400 font-black text-xl">{idx + 1}</span>
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-500 text-black border-4 border-white">
                <p className="text-xl font-black mb-2">THE OPPORTUNITY GAP</p>
                <p className="text-sm mb-2">
                  West Africa produces world-class distance runners but has zero major international marathons.
                  A successful Cameroon Marathon could:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Showcase West African talent on home soil</li>
                  <li>• Generate $25-75M annual economic impact</li>
                  <li>• Create 2,000-8,000 jobs</li>
                  <li>• Attract 15,000-40,000 international tourists</li>
                  <li>• Catalyze $50-200M infrastructure investment</li>
                  <li>• Establish West Africa on global running calendar</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-white text-black border-2 border-white">
                <p className="font-black text-lg mb-2">BLUEPRINT: SYDNEY'S SUCCESS</p>
                <p className="text-sm">
                  Sydney Marathon grew from 5,300 (2022) to 35,000 (2025) participants through government investment
                  and partnership with Ironman Oceania. Cameroon could follow a similar playbook with proper backing.
                </p>
              </div>
            </div>
          </>
        )}

        {/* Sources */}
        {selectedMetric === 'sources' && (
          <>
            <div className="col-span-1 lg:col-span-2 bg-gray-50 border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">RESEARCH SOURCES & BIBLIOGRAPHY</h3>
              <p className="text-sm text-gray-600 mb-6">
                Data synthesized from {sources.length} sources including official race statistics, economic impact studies,
                charitable reports, news articles, and academic research (2015-2025).
              </p>
              <div className="max-h-[600px] overflow-y-auto pr-4">
                <div className="space-y-3">
                  {sources.map((source, index) => (
                    <div key={index} className="bg-white border-2 border-black p-3 hover:shadow-lg transition-shadow">
                      <div className="flex">
                        <span className="font-bold text-lg mr-3 min-w-[40px]">{index + 1}.</span>
                        <p className="text-sm text-gray-800">{source}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">DATA METHODOLOGY</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-xl mb-2">Primary Sources</p>
                  <p className="text-sm">Official marathon websites, race results, and economic impact reports from organizing bodies</p>
                </div>
                <div>
                  <p className="font-bold text-xl mb-2">Secondary Sources</p>
                  <p className="text-sm">News articles, running publications, and verified race databases (MarathonView, Wikipedia)</p>
                </div>
                <div>
                  <p className="font-bold text-xl mb-2">Unpublished Reports</p>
                  <p className="text-sm">Commissioned research analyzing global road racing dynamics and strategic growth opportunities</p>
                </div>
                <div>
                  <p className="font-bold text-xl mb-2">Data Coverage</p>
                  <p className="text-sm">Comprehensive analysis spanning 2015-2025 across major marathons globally</p>
                </div>
                <div>
                  <p className="font-bold text-xl mb-2">Key Metrics Tracked</p>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>• Participation & finisher counts</li>
                    <li>• Economic impact & organizational costs</li>
                    <li>• Charitable fundraising totals</li>
                    <li>• Entry fees & pricing structures</li>
                    <li>• Demand metrics & success rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t-4 border-black">
        <p className="text-xs text-gray-500">
          Dashboard visualization of "Global Marathon Landscape: A Synthesis of Participation, Economic, and Philanthropic Trends" and supporting research reports.
          Data synthesized from 80+ sources including official race statistics, economic impact studies, charitable reports, and academic research (2015-2025).
          Interactive elements powered by Recharts. Design: Neo-brutalist Digital Minimalism. Includes projections for West African marathon development potential.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
