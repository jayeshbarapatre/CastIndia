import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://likidgxfwqldeiirlyrk.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_dKC-93ymaIgGbqJyUy_Z4A_f7ybr78r'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const dummyCastingCalls = [
  {
    project_name: 'Cyberpunk Mumbai',
    project_type: 'Web Series',
    description: 'A sci-fi action series set in the neon-lit streets of 2077 Mumbai. Looking for edgy, dynamic actors who can handle stunt work.',
    roles: [
      { roleName: 'Lead Hacker', ageRange: '20-30', gender: 'Any', requirements: 'Must have intense screen presence. Martial arts background is a huge plus.' },
      { roleName: 'Street Vendor', ageRange: '40-60', gender: 'Male', requirements: 'Speaks fluent Marathi and English. Needs a gritty, realistic look.' }
    ]
  },
  {
    project_name: 'Nike India: Own The Streets',
    project_type: 'TV Commercial',
    description: 'High-energy commercial focusing on street football and urban sports culture across India.',
    roles: [
      { roleName: 'Freestyle Footballer', ageRange: '18-25', gender: 'Any', requirements: 'Must be capable of doing advanced football tricks.' }
    ]
  },
  {
    project_name: 'Andhera',
    project_type: 'Feature Film',
    description: 'A psychological thriller about a detective losing their mind. Very intense, dialogue-heavy.',
    roles: [
      { roleName: 'Lead Detective', ageRange: '35-50', gender: 'Male', requirements: 'Brooding, complex. Theater background preferred.' },
      { roleName: 'The Suspect', ageRange: '25-35', gender: 'Female', requirements: 'Innocent look but highly manipulative.' }
    ]
  }
]

const dummyTalents = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    user_id: '11111111-1111-1111-1111-111111111111',
    full_name: 'Aryan Sharma',
    role_title: 'Action Actor / Stuntman',
    location: 'Mumbai, MH',
    bio: 'Trained in MMA and parkour. Worked as a stunt double for 3 major Bollywood films before transitioning to acting.',
    experience_level: 'Professional',
    skills: ['Martial Arts', 'Parkour', 'Hindi', 'English']
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    user_id: '22222222-2222-2222-2222-222222222222',
    full_name: 'Neha Gupta',
    role_title: 'Lead Actress',
    location: 'Delhi, DL',
    bio: 'NSD graduate with 5 years of theater experience. Looking for challenging, character-driven roles.',
    experience_level: 'Professional',
    skills: ['Classical Dance', 'Method Acting', 'Singing']
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    user_id: '33333333-3333-3333-3333-333333333333',
    full_name: 'Kabir Singh',
    role_title: 'Commercial Model',
    location: 'Bangalore, KA',
    bio: 'Fresh face in the industry. Done a few print shoots for local fashion brands.',
    experience_level: 'Beginner',
    skills: ['Modeling', 'Fitness']
  }
]

async function seed() {
  console.log('Seeding Database...')

  // Insert Talents
  for (const talent of dummyTalents) {
    const { data, error } = await supabase.from('talent_profiles').upsert(talent)
    if (error) console.error('Error inserting talent:', error)
    else console.log(`Inserted talent: ${talent.full_name}`)
  }

  console.log('Done seeding!')
}

seed()
