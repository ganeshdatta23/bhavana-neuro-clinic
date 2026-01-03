import type { Service, Doctor, Testimonial, WhyChooseUsItem, Stat, Department, Condition, Facility, BlogPost } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'headache-migraine',
    title: 'Headache & Migraine',
    shortDescription: 'Relief from chronic headaches and migraines.',
    longDescription: 'We provide comprehensive diagnosis and treatment for all types of headaches and migraines, including medication management and lifestyle modifications.',
    icon: 'Headset',
    treats: ['Migraine', 'Tension Headache', 'Cluster Headache']
  },
  {
    id: 'stroke-paralysis',
    title: 'Stroke & Paralysis',
    shortDescription: 'Rapid response and comprehensive stroke treatment.',
    longDescription: 'Our dedicated Stroke Unit provides 24/7 emergency care, including thrombolysis and mechanical thrombectomy, followed by intensive rehabilitation to maximize recovery.',
    icon: 'HeartPulse',
    treats: ['Ischemic Stroke', 'Hemorrhagic Stroke', 'Transient Ischemic Attack (TIA)']
  },
  {
    id: 'epilepsy',
    title: 'Epilepsy (Fits)',
    shortDescription: 'Specialized care for seizure management.',
    longDescription: 'Our Epilepsy Clinic offers advanced diagnosis with EEG, medication management, and counseling to help patients control seizures and improve their quality of life.',
    icon: 'Zap',
    treats: ['Generalized Seizures', 'Focal Seizures', 'Status Epilepticus']
  },
  {
    id: 'vertigo',
    title: 'Vertigo (Dizziness)',
    shortDescription: 'Diagnosis and treatment of balance disorders.',
    longDescription: 'Comprehensive evaluation and management of vertigo and dizziness, including vestibular rehabilitation and medication therapy.',
    icon: 'BrainCircuit',
    treats: ['BPPV', 'Vestibular Neuritis', 'Meniere\'s Disease']
  },
  {
    id: 'parkinsons',
    title: 'Parkinson\'s Disease',
    shortDescription: 'Management of movement disorders.',
    longDescription: 'Specialized care for Parkinson\'s disease and other movement disorders with medication management and physiotherapy support.',
    icon: 'Brain',
    treats: ['Parkinson\'s Disease', 'Essential Tremor', 'Dystonia']
  },
  {
    id: 'memory-dementia',
    title: 'Memory Loss & Dementia',
    shortDescription: 'Cognitive assessment and dementia care.',
    longDescription: 'Comprehensive evaluation and management of memory disorders, including Alzheimer\'s disease and other forms of dementia.',
    icon: 'BrainCircuit',
    treats: ['Alzheimer\'s Disease', 'Vascular Dementia', 'Mild Cognitive Impairment']
  },
  {
    id: 'diabetic-neuropathy',
    title: 'Diabetic Neuropathy',
    shortDescription: 'Treatment for diabetes-related nerve damage.',
    longDescription: 'Specialized care for diabetic neuropathy with pain management and strategies to prevent progression.',
    icon: 'Activity',
    treats: ['Peripheral Neuropathy', 'Autonomic Neuropathy', 'Focal Neuropathy']
  },
  {
    id: 'nerve-muscle',
    title: 'Nerve & Muscle Problems',
    shortDescription: 'Diagnosis and treatment of neuromuscular disorders.',
    longDescription: 'Comprehensive care for nerve and muscle disorders using advanced diagnostic techniques like EMG and NCS.',
    icon: 'Bone',
    treats: ['Myasthenia Gravis', 'Peripheral Neuropathy', 'Muscular Dystrophy']
  },
  {
    id: 'brain-spine-tumors',
    title: 'Brain & Spine Tumors',
    shortDescription: 'Surgical treatment for brain and spinal tumors.',
    longDescription: 'Advanced neurosurgical care for brain and spine tumors using endoscopic and microscopic techniques.',
    icon: 'Brain',
    treats: ['Gliomas', 'Meningiomas', 'Spinal Tumors']
  },
  {
    id: 'head-spine-injuries',
    title: 'Head & Spine Injuries',
    shortDescription: 'Emergency and surgical care for trauma.',
    longDescription: '24/7 emergency care for traumatic brain and spine injuries with advanced surgical interventions.',
    icon: 'Ambulance',
    treats: ['Traumatic Brain Injury', 'Spinal Cord Injury', 'Skull Fractures']
  },
  {
    id: 'brain-aneurysms',
    title: 'Brain Aneurysms',
    shortDescription: 'Treatment for cerebral aneurysms.',
    longDescription: 'Specialized endovascular and surgical treatment for brain aneurysms to prevent rupture and complications.',
    icon: 'HeartPulse',
    treats: ['Unruptured Aneurysms', 'Ruptured Aneurysms', 'Subarachnoid Hemorrhage']
  },
  {
    id: 'trigeminal-neuralgia',
    title: 'Trigeminal Neuralgia',
    shortDescription: 'Treatment for facial pain.',
    longDescription: 'Specialized care for trigeminal neuralgia with medication management and surgical options for severe cases.',
    icon: 'Zap',
    treats: ['Classic Trigeminal Neuralgia', 'Atypical Facial Pain']
  },
  {
    id: 'degenerative-spine',
    title: 'Degenerative Spine Diseases',
    shortDescription: 'Management of spine degeneration.',
    longDescription: 'Comprehensive care for degenerative spine conditions with both conservative and surgical treatment options.',
    icon: 'Bone',
    treats: ['Slipped Disc', 'Spinal Stenosis', 'Spondylolisthesis']
  },
  {
    id: 'endoscopic-microscopic',
    title: 'Endoscopic & Microscopic Surgeries',
    shortDescription: 'Minimally invasive neurosurgical procedures.',
    longDescription: 'Advanced minimally invasive surgical techniques for brain and spine conditions with faster recovery.',
    icon: 'Stethoscope',
    treats: ['Endoscopic Brain Surgery', 'Microscopic Spine Surgery', 'Skull Base Surgery']
  },
  {
    id: 'image-guided-spine',
    title: 'Image-Guided Spine Surgery',
    shortDescription: 'Precision spine surgery with imaging.',
    longDescription: 'State-of-the-art image-guided spine surgery for enhanced precision and safety.',
    icon: 'Radiation',
    treats: ['Complex Spine Deformities', 'Spinal Instrumentation', 'Revision Spine Surgery']
  },
  {
    id: 'complex-spine',
    title: 'Complex Spine Surgery',
    shortDescription: 'Advanced surgical care for complex spine conditions.',
    longDescription: 'Expert management of complex spine disorders requiring advanced surgical techniques and expertise.',
    icon: 'Bone',
    treats: ['Spinal Deformities', 'Multi-level Spine Disease', 'Failed Back Surgery']
  },
];

export const additionalDepartments: Department[] = [
  // {
  //   id: 'general-medicine',
  //   name: 'General Medicine',
  //   description: 'Comprehensive care for a wide range of adult illnesses, focusing on prevention, diagnosis, and treatment.',
  //   icon: 'Stethoscope'
  // },
  // {
  //   id: 'orthopedics',
  //   name: 'Orthopedics',
  //   description: 'Treatment for injuries and diseases of the musculoskeletal system, including bones, joints, ligaments, and tendons.',
  //   icon: 'Bone'
  // },
  // {
  //   id: 'cardiology',
  //   name: 'Cardiology',
  //   description: 'Specialized care for heart and blood vessel disorders, from hypertension to heart failure.',
  //   icon: 'Heart'
  // },
  // {
  //   id: 'physiotherapy',
  //   name: 'Physiotherapy & Rehab',
  //   description: 'Personalized rehabilitation programs to restore movement and function after injury, surgery, or illness.',
  //   icon: 'PersonStanding'
  // },
  // {
  //   id: 'emergency-trauma',
  //   name: 'Emergency & Trauma',
  //   description: '24/7 immediate medical response for critical injuries and life-threatening conditions.',
  //   icon: 'Ambulance'
  // },
  // {
  //   id: 'neurocritical-care',
  //   name: 'Neurocritical Care (ICU)',
  //   description: 'Intensive care for patients with severe, life-threatening neurological conditions, managed by a specialized team.',
  //   icon: 'BedDouble'
  // }
];

export const doctors: Doctor[] = [
  {
    id: 'dr-parasa-lakshmi-bhavana',
    name: 'Dr. Parasa Lakshmi Bhavana',
    qualification: 'MBBS, MD - General Medicine, DNB - Neurology',
    experience: '7 Years Experience Overall',
    specialty: 'Neurologist',
    interests: ['Stroke', 'Migraine', 'Epilepsy', 'Movement Disorders', 'Neuro-Muscular Disorders (NMD)', 'Spine Disorders'],
    languages: ['English', 'Hindi', 'Telugu'],
    message: 'My goal is to provide clear answers and effective treatment to help you regain control of your life.',
    avatarUrl: '/dr_bhavana.jpeg',
  },
  {
    id: 'dr-kagitha-rakesh',
    name: 'Dr. Kagitha Rakesh',
    qualification: 'MBBS, MS (Gen. Surgery), DNB (Neuro Surgery)',
    experience: 'Former Asst. Professor at GGH, Vijayawada',
    specialty: 'Endoscopic Brain & Spine Surgeon',
    interests: ['Micro-neurosurgery', 'Skull Base Surgery', 'Endovascular Brain Surgery', 'Minimally Invasive Spine Surgery'],
    languages: ['English', 'Telugu'],
    message: 'Combining surgical precision with compassion is the key to successful patient outcomes.',
    avatarUrl: '/dr_rakesh.jpeg',
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
    quote: 'My father received emergency stroke care here. The quick response from the team at Dr. Bhavana Neuro Care saved his life. We are forever grateful for their expertise and compassion.',
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
  { value: '10+', label: 'Years of Experience' },
  { value: '10,500+', label: 'Successful Consultations' },
  { value: '24/7', label: 'Emergency Neuro Support' },
  { value: '100%', label: 'Patient-Focused Care' },
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
  { name: 'EEG (Electroencephalogram)', description: 'Advanced EEG testing for diagnosis of epilepsy, seizures, and other brain disorders.', icon: 'Activity' },
  { name: 'EMG (Electromyography)', description: 'Electromyography for evaluating muscle and nerve function in neuromuscular disorders.', icon: 'Activity' },
  { name: 'NCS (Nerve Conduction Study)', description: 'Nerve conduction studies to diagnose peripheral nerve disorders and neuropathies.', icon: 'Activity' },
  { name: 'Advanced Operation Theatres', description: 'Modular OTs equipped for complex neurosurgeries with strict infection control.', icon: 'Stethoscope' },
  { name: 'Neuro-ICU', description: 'Dedicated Neuro-Intensive Care Unit with 24/7 monitoring by a specialized team.', icon: 'BedDouble' },
  { name: 'Radiology (Tie-up)', description: 'Seamless access to high-resolution MRI and CT scans through our trusted diagnostic partners.', icon: 'Radiation' },
  { name: '24/7 Pharmacy', description: 'A well-stocked, round-the-clock pharmacy ensuring availability of all essential and specialized medications.', icon: 'Pill' },
  { name: 'Ambulance Services', description: 'Fully equipped ambulances for safe and rapid patient transport during emergencies.', icon: 'Ambulance' },
  { name: 'In-house Physiotherapy', description: 'A modern physiotherapy department to support post-surgical and stroke rehabilitation.', icon: 'PersonStanding' },
];

export const blogPosts: BlogPost[] = [
  { id: 'be-fast-stroke', title: 'BE-FAST: Recognizing the Early Signs of a Stroke', excerpt: 'Time is brain. Every second counts during a stroke. Learn the BE-FAST acronym to quickly identify stroke symptoms and why immediate medical attention is critical for a better outcome...', href: '/blog/be-fast-stroke' },
  { id: 'epilepsy-myths-facts', title: 'Living with Epilepsy: Myths vs. Facts', excerpt: 'Epilepsy is more common than you think, but it\'s surrounded by myths. We debunk common misconceptions and share facts about living a full and active life with epilepsy...', href: '/blog/epilepsy-myths-facts' },
  { id: 'migraine-doctor-visit', title: 'Not Just a Headache: When to See a Doctor for Your Migraine', excerpt: 'Millions suffer from migraines, but many don\'t seek help. Learn about the different types of headaches and understand which symptoms indicate you should consult a neurologist...', href: '/blog/migraine-doctor-visit' },
  { id: 'spine-health-tips', title: 'Simple Steps to Keep Your Spine Healthy', excerpt: 'Back pain is a leading cause of disability worldwide. Our neurosurgeons share practical tips on posture, exercise, and lifestyle habits to protect your spine and prevent future problems...', href: '/blog/spine-health-tips' }
];
