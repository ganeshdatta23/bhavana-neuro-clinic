import type { Service, Doctor, Testimonial, WhyChooseUsItem, Stat, Department, Condition, Facility, BlogPost } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'neurology',
    title: 'Neurology',
    shortDescription: 'Diagnosis and treatment of nervous system disorders.',
    longDescription: 'Our Neurology department provides comprehensive care for disorders of the brain, spinal cord, and peripheral nerves. We use advanced diagnostic techniques to identify conditions and create personalized treatment plans.',
    icon: 'BrainCircuit',
    treats: ['Stroke', 'Epilepsy & Seizures', 'Headache & Migraine', 'Parkinson\'s Disease', 'Dementia', 'Neuropathy']
  },
  {
    id: 'neurosurgery',
    title: 'Neurosurgery',
    shortDescription: 'Surgical treatment for neurological conditions.',
    longDescription: 'The Neurosurgery department specializes in complex surgical procedures for the brain and spine, including tumor removal, spine surgery, and treatment for traumatic brain injuries.',
    icon: 'Brain',
    treats: ['Brain Tumors', 'Spine Disorders', 'Traumatic Brain Injury', 'Hydrocephalus']
  },
  {
    id: 'stroke-care',
    title: 'Stroke Care',
    shortDescription: 'Rapid response and comprehensive stroke treatment.',
    longDescription: 'Our dedicated Stroke Unit provides 24/7 emergency care, including thrombolysis and mechanical thrombectomy, followed by intensive rehabilitation to maximize recovery.',
    icon: 'HeartPulse',
    treats: ['Ischemic Stroke', 'Hemorrhagic Stroke', 'Transient Ischemic Attack (TIA)']
  },
  {
    id: 'spine-disorders',
    title: 'Spine Disorders',
    shortDescription: 'Management of back pain and spinal conditions.',
    longDescription: 'We offer both surgical and non-surgical treatments for a wide range of spine disorders, from common back pain to complex spinal cord injuries and deformities.',
    icon: 'Bone',
    treats: ['Slipped Disc', 'Spinal Stenosis', 'Sciatica', 'Spinal Tumors', 'Spinal Injuries']
  },
  {
    id: 'epilepsy-clinic',
    title: 'Epilepsy Clinic',
    shortDescription: 'Specialized care for seizure management.',
    longDescription: 'Our Epilepsy Clinic offers advanced diagnosis with video-EEG, medication management, and counseling to help patients control seizures and improve their quality of life.',
    icon: 'Zap',
    treats: ['Generalized Seizures', 'Focal Seizures', 'Status Epilepticus']
  },
  {
    id: 'headache-clinic',
    title: 'Headache & Migraine Clinic',
    shortDescription: 'Relief from chronic headaches and migraines.',
    longDescription: 'We provide a multidisciplinary approach to managing chronic headaches and migraines, including medication, lifestyle advice, and advanced therapies like Botox injections.',
    icon: 'Headset',
    treats: ['Migraine', 'Tension Headache', 'Cluster Headache']
  },
];

export const additionalDepartments: Department[] = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    description: 'Comprehensive care for a wide range of adult illnesses, focusing on prevention, diagnosis, and treatment.',
    icon: 'Stethoscope'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Treatment for injuries and diseases of the musculoskeletal system, including bones, joints, ligaments, and tendons.',
    icon: 'Bone'
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Specialized care for heart and blood vessel disorders, from hypertension to heart failure.',
    icon: 'Heart'
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy & Rehab',
    description: 'Personalized rehabilitation programs to restore movement and function after injury, surgery, or illness.',
    icon: 'PersonStanding'
  },
  {
    id: 'emergency-trauma',
    name: 'Emergency & Trauma',
    description: '24/7 immediate medical response for critical injuries and life-threatening conditions.',
    icon: 'Ambulance'
  },
  {
    id: 'neurocritical-care',
    name: 'Neurocritical Care (ICU)',
    description: 'Intensive care for patients with severe, life-threatening neurological conditions, managed by a specialized team.',
    icon: 'BedDouble'
  }
];

export const doctors: Doctor[] = [
  {
    id: 'dr-anil-kumar',
    name: 'Dr. Anil Kumar',
    qualification: 'MD, DM (Neurology)',
    experience: '15+ Years of Experience',
    specialty: 'Senior Consultant Neurologist',
    interests: ['Stroke Management', 'Epilepsy', 'Headache Disorders'],
    languages: ['English', 'Hindi', 'Telugu'],
    message: 'My goal is to provide clear answers and effective treatment to help you regain control of your life.',
    avatarUrl: 'https://picsum.photos/seed/doctor1/400/400',
  },
  {
    id: 'dr-sunita-reddy',
    name: 'Dr. Sunita Reddy',
    qualification: 'MS, M.Ch (Neurosurgery)',
    experience: '12+ Years of Experience',
    specialty: 'Consultant Neurosurgeon',
    interests: ['Brain Tumor Surgery', 'Complex Spine Surgery', 'Pediatric Neurosurgery'],
    languages: ['English', 'Telugu'],
    message: 'Combining surgical precision with compassion is the key to successful patient outcomes.',
    avatarUrl: 'https://picsum.photos/seed/doctor2/400/400',
  },
  {
    id: 'dr-vikram-singh',
    name: 'Dr. Vikram Singh',
    qualification: 'MD (General Medicine), DNB (Cardiology)',
    experience: '10+ Years of Experience',
    specialty: 'Consultant Cardiologist',
    interests: ['Interventional Cardiology', 'Heart Failure Management'],
    languages: ['English', 'Hindi'],
    message: 'A healthy heart is central to overall well-being. I am here to guide and support you.',
    avatarUrl: 'https://picsum.photos/seed/doctor3/400/400',
  },
  {
    id: 'dr-priya-sharma',
    name: 'Dr. Priya Sharma',
    qualification: 'MD, DM (Neurology)',
    experience: '8+ Years of Experience',
    specialty: 'Consultant Neurologist',
    interests: ['Movement Disorders', 'Dementia', 'Neurocritical Care'],
    languages: ['English', 'Hindi', 'Telugu'],
    message: 'I believe in a partnership with my patients to navigate complex neurological conditions together.',
    avatarUrl: 'https://picsum.photos/seed/doctor4/400/400',
  },
  {
    id: 'dr-rajesh-patel',
    name: 'Dr. Rajesh Patel',
    qualification: 'MS (Orthopedics)',
    experience: '14+ Years of Experience',
    specialty: 'Consultant Orthopedic Surgeon',
    interests: ['Joint Replacement', 'Arthroscopy', 'Trauma Surgery'],
    languages: ['English', 'Gujarati', 'Hindi'],
    message: 'Restoring mobility and helping patients return to an active life is my greatest satisfaction.',
    avatarUrl: 'https://picsum.photos/seed/doctor5/400/400',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'R. Kumar, Vijayawada',
    quote: 'The doctors explained my condition so clearly and the treatment was very effective. The staff is very caring and the hospital is spotless. I felt I was in the safest hands.',
    avatarUrl: 'https://picsum.photos/seed/patient1/100/100',
  },
  {
    id: 't2',
    name: 'S. Devi, Guntur',
    quote: 'My father received emergency stroke care here. The quick response from the team at Bhavana Neuro Clinic saved his life. We are forever grateful for their expertise and compassion.',
    avatarUrl: 'https://picsum.photos/seed/patient2/100/100',
  },
  {
    id: 't3',
    name: 'A. Khan, Eluru',
    quote: 'I have been living with epilepsy for years. The team here helped me find the right medication. My seizures are finally under control. The level of care is excellent.',
    avatarUrl: 'https://picsum.photos/seed/patient3/100/100',
  },
  {
    id: 't4',
    name: 'P. Rao, Vijayawada',
    quote: 'The physiotherapy department is fantastic. Their personalized exercises and constant encouragement helped me recover fully after my spine surgery. Highly recommended.',
    avatarUrl: 'https://picsum.photos/seed/patient4/100/100',
  },
  {
    id: 't5',
    name: 'M. Begum, Machilipatnam',
    quote: 'Finding a good neurologist was a challenge. Dr. Anil Kumar was patient, listened to all my concerns about my migraines, and the treatment has made a huge difference.',
    avatarUrl: 'https://picsum.photos/seed/patient5/100/100',
  },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: 'Experienced Specialists',
    description: 'Our team consists of highly qualified and experienced neurologists, neurosurgeons, and other specialists dedicated to your care.',
    icon: 'UserMd',
  },
  {
    title: 'Advanced Diagnostics',
    description: 'Equipped with modern neuro-diagnostic tools like EEG, EMG, and NCV for accurate and rapid diagnosis.',
    icon: 'Stethoscope',
  },
  {
    title: '24/7 Emergency Care',
    description: 'Our emergency department is open 24/7 with a dedicated team ready to handle any neurological or medical emergency.',
    icon: 'Ambulance',
  },
  {
    title: 'Patient-Centric Approach',
    description: 'We believe in compassionate care, clear communication, and involving patients in their treatment decisions.',
    icon: 'Users',
  },
  {
    title: 'Infection Control Standards',
    description: 'We adhere to strict hygiene and infection prevention protocols to ensure a safe environment for all our patients.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Affordable Treatment',
    description: 'We are committed to providing high-quality healthcare that is accessible and affordable for everyone.',
    icon: 'FileCheck',
  },
];

export const stats: Stat[] = [
  { value: '15+', label: 'Years of Experience' },
  { value: '50,000+', label: 'Patients Treated' },
  { value: '100+', label: 'Hospital Beds' },
  { value: '20+', label: 'Specialist Doctors' },
];

export const conditions: Condition[] = [
  {
    id: 'stroke',
    title: 'Stroke (Brain Attack)',
    definition: 'A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes.',
    symptoms: ['Sudden numbness or weakness in the face, arm, or leg, especially on one side', 'Sudden confusion, trouble speaking or understanding speech', 'Sudden trouble seeing in one or both eyes', 'Sudden trouble walking, dizziness, loss of balance'],
    whenToSeeDoctor: 'A stroke is a medical emergency. Seek immediate medical attention if you or someone you are with experiences any symptoms of a stroke. Time is critical.',
    treatmentApproach: 'Treatment depends on the type of stroke. Ischemic strokes are treated with clot-busting drugs (thrombolysis) or clot removal procedures. Hemorrhagic strokes require controlling bleeding and reducing pressure on the brain.'
  },
  {
    id: 'epilepsy',
    title: 'Epilepsy & Seizures',
    definition: 'Epilepsy is a neurological disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness.',
    symptoms: ['Temporary confusion', 'A staring spell', 'Uncontrollable jerking movements of the arms and legs', 'Loss of consciousness or awareness', 'Psychic symptoms such as fear or anxiety'],
    whenToSeeDoctor: 'See a neurologist if you have a seizure for the first time. It is important to get an accurate diagnosis and begin treatment to control seizures.',
    treatmentApproach: 'Most people with epilepsy can become seizure-free with anti-epileptic medications. For some, surgery or other therapies like vagus nerve stimulation or a ketogenic diet may be options.'
  },
  {
    id: 'migraine',
    title: 'Migraine & Headache',
    definition: 'A migraine is a type of headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It\'s often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.',
    symptoms: ['Severe, throbbing headache', 'Nausea and vomiting', 'Sensitivity to light, sound, or smells', 'Visual disturbances (aura)', 'Pain that worsens with physical activity'],
    whenToSeeDoctor: 'If you have frequent or severe headaches, or if your headache pattern changes, consult a neurologist to get a proper diagnosis and effective treatment plan.',
    treatmentApproach: 'Treatment focuses on relieving symptoms (abortive treatment) and preventing future attacks (preventive treatment). This includes medications, lifestyle changes, and identifying triggers.'
  },
  {
    id: 'parkinsons-disease',
    title: 'Parkinson\'s Disease',
    definition: 'Parkinson\'s disease is a progressive disorder that affects the nervous system and the parts of the body controlled by the nerves, leading to movement difficulties.',
    symptoms: ['Tremor (shaking), often in a hand or fingers', 'Slowed movement (bradykinesia)', 'Rigid muscles', 'Impaired posture and balance', 'Changes in speech and writing'],
    whenToSeeDoctor: 'Consult a neurologist if you have any of the primary symptoms of Parkinson\'s disease to get an accurate diagnosis and begin managing the condition.',
    treatmentApproach: 'There is no cure for Parkinson\'s, but medications can significantly improve symptoms. In some cases, surgical procedures like Deep Brain Stimulation (DBS) may be advised. Physiotherapy is also crucial.'
  },
];

export const facilities: Facility[] = [
  { name: 'Advanced Operation Theatres', description: 'Modular OTs equipped for complex neurosurgeries with strict infection control.', icon: 'Stethoscope' },
  { name: 'Neuro-ICU', description: 'Dedicated Neuro-Intensive Care Unit with 24/7 monitoring by a specialized team.', icon: 'BedDouble' },
  { name: 'Neuro-Diagnostics Lab', description: 'In-house EEG, EMG, and NCV facilities for accurate and timely diagnosis of neurological disorders.', icon: 'Activity' },
  { name: 'Radiology (Tie-up)', description: 'Seamless access to high-resolution MRI and CT scans through our trusted diagnostic partners.', icon: 'Radiation' },
  { name: '24/7 Pharmacy', description: 'A well-stocked, round-the-clock pharmacy ensuring availability of all essential and specialized medications.', icon: 'Pill' },
  { name: 'Ambulance Services', description: 'Fully equipped ambulances for safe and rapid patient transport during emergencies.', icon: 'Ambulance' },
  { name: 'Comfortable Waiting Areas', description: 'Spacious and clean waiting lounges for the comfort of patients and their families.', icon: 'Armchair' },
  { name: 'In-house Physiotherapy', description: 'A modern physiotherapy department to support post-surgical and stroke rehabilitation.', icon: 'PersonStanding' },
];

export const blogPosts: BlogPost[] = [
  { id: '1', title: 'BE-FAST: Recognizing the Early Signs of a Stroke', excerpt: 'Time is brain. Every second counts during a stroke. Learn the BE-FAST acronym to quickly identify stroke symptoms and why immediate medical attention is critical for a better outcome...', href: '/blog/recognizing-stroke-signs' },
  { id: '2', title: 'Living with Epilepsy: Myths vs. Facts', excerpt: 'Epilepsy is more common than you think, but it\'s surrounded by myths. We debunk common misconceptions and share facts about living a full and active life with epilepsy...', href: '/blog/epilepsy-myths-facts' },
  { id: '3', title: 'Not Just a Headache: When to See a Doctor for Your Migraine', excerpt: 'Millions suffer from migraines, but many don\'t seek help. Learn about the different types of headaches and understand which symptoms indicate you should consult a neurologist...', href: '/blog/when-to-see-doctor-for-migraine' },
  { id: '4', title: 'Simple Steps to Keep Your Spine Healthy', excerpt: 'Back pain is a leading cause of disability worldwide. Our neurosurgeons share practical tips on posture, exercise, and lifestyle habits to protect your spine and prevent future problems...', href: '/blog/spine-health-tips' }
];
