export interface ServiceData {
    slug: string;
    title: string;
    shortDescription: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    intro: string;
    symptoms: string[];
    treatment: string;
    localContext: string;
    keywords: string[];
}

export const servicesData: ServiceData[] = [
    {
        slug: 'stroke-treatment-machilipatnam',
        title: 'Stroke & Paralysis',
        shortDescription: 'Rapid stroke and paralysis treatment for patients in Machilipatnam and surrounding villages.',
        metaTitle: 'Stroke Hospital in Machilipatnam | Paralysis Treatment - Dr Bhavana Neuro',
        metaDescription: 'Best stroke hospital in Machilipatnam. 24/7 emergency paralysis treatment for patients from Gudivada, Avanigadda & Repalle. Dr Bhavana Neuro Care.',
        h1: 'Stroke & Paralysis Treatment in Machilipatnam',
        intro: 'Stroke is a medical emergency that requires immediate attention. At Dr Bhavana Neuro Care in Machilipatnam, Krishna District, we provide rapid assessment and advanced treatment for stroke (brain attack) and paralysis. Our clinic is easily accessible for patients from Gudivada, Avanigadda, and nearby towns who need urgent neuro care.',
        symptoms: [
            'Sudden weakness or numbness of the face, arm, or leg',
            'Sudden confusion or trouble speaking',
            'Sudden trouble seeing in one or both eyes',
            'Sudden loss of balance or dizziness',
            'Severe headache with no known cause'
        ],
        treatment: 'Our stroke management protocol focuses on rapid diagnosis using CT/MRI imaging and immediate intervention. We offer comprehensive care including clot-busting therapies (thrombolysis) if reachable within the golden window, and dedicated rehabilitation for paralysis recovery. We monitor risk factors like hypertension and diabetes to prevent recurrence.',
        localContext: 'We regularly treat stroke patients from coastal areas like Machilipatnam, Avanigadda, and Repalle, ensuring they receive world-class care without traveling to distant metros.',
        keywords: ['stroke hospital in Machilipatnam', 'paralysis treatment', 'brain stroke emergency', 'neurologist in Machilipatnam', 'neuro doctor near me']
    },
    {
        slug: 'epilepsy-clinic-machilipatnam',
        title: 'Epilepsy (Fits)',
        shortDescription: 'Comprehensive care for epilepsy and seizures for patients in Machilipatnam.',
        metaTitle: 'Epilepsy Specialist in Machilipatnam | Fits Treatment - Dr Bhavana Neuro',
        metaDescription: 'Expert epilepsy (fits) treatment in Machilipatnam. Dr Bhavana is a specialist for seizure control, serving patients from Gudivada, Challapalli & nearby.',
        h1: 'Epilepsy & Fits Treatment in Machilipatnam',
        intro: 'Living with epilepsy (fits) can be challenging, but with the right treatment, you can lead a normal life. Dr Bhavana Neuro Care offers specialized management for seizures in children and adults right here in Machilipatnam, serving the entire Krishna District.',
        symptoms: [
            'Uncontrollable jerking movements of the arms and legs',
            'Loss of consciousness or awareness',
            'Temporary confusion or staring spells',
            'Psychic symptoms such as fear or anxiety',
            'Stiffening of the body'
        ],
        treatment: 'We provide detailed evaluation using EEG and imaging to identify the type of epilepsy. Our treatment plans are personalized, focusing on the right medication to control seizures with minimal side effects. We also educate families on seizure first aid and lifestyle modifications.',
        localContext: 'Many patients travel from Gudivada, Challapalli, and Pedana to our clinic in Machilipatnam for consistent and compassionate epilepsy care.',
        keywords: ['epilepsy specialist in Machilipatnam', 'fits doctor near me', 'seizure treatment', 'neurologist machilipatnam']
    },
    {
        slug: 'migraine-headache-specialist-machilipatnam',
        title: 'Headache & Migraine',
        shortDescription: 'Relief from chronic headaches and migraines in Machilipatnam.',
        metaTitle: 'Migraine Doctor in Machilipatnam | Headache Specialist - Dr Bhavana Neuro',
        metaDescription: 'Chronic headache relief in Machilipatnam. Consult Dr Bhavana, top migraine specialist for patients in Krishna District, Gudivada & Avanigadda.',
        h1: 'Migraine & Headache Treatment in Machilipatnam',
        intro: 'Chronic headaches and migraines can disrupt your daily life. As a leading headache specialist in Machilipatnam, Dr Bhavana provides effective relief for severe migraines, tension headaches, and cluster headaches.',
        symptoms: [
            'Severe throbbing pain, often on one side of the head',
            'Sensitivity to light (photophobia) and sound',
            'Nausea and vomiting',
            'Visual disturbances (aura)',
            'Pain that worsens with physical activity'
        ],
        treatment: 'We utilize a combination of advanced medications, lifestyle counseling, and trigger management to reduce headache frequency and severity. We treat not just the pain, but the underlying causes of your migraine.',
        localContext: 'Serving the community of Machilipatnam and neighbors like Gudivada, we help you get back to work and family life without the burden of constant headaches.',
        keywords: ['migraine doctor in Machilipatnam', 'headache specialist', 'severe headache treatment', 'neuro doctor machilipatnam']
    },
    {
        slug: 'vertigo-balance-disorders-machilipatnam',
        title: 'Vertigo (Dizziness)',
        shortDescription: 'Expert diagnosis and treatment for vertigo and giddiness.',
        metaTitle: 'Vertigo Treatment in Machilipatnam | Giddiness Specialist - Dr Bhavana Neuro',
        metaDescription: 'Stop dizziness and spinning sensations. Best vertigo (giddiness) treatment in Machilipatnam. Expert balance disorder care for Krishna District patients.',
        h1: 'Vertigo & Balance Disorder Treatment in Machilipatnam',
        intro: 'Vertigo, or the sensation of spinning (giddiness), can be debilitating. At Dr Bhavana Neuro Care in Machilipatnam, we specialize in diagnosing vestibular and balance disorders that cause dizziness.',
        symptoms: [
            'Spinning sensation (you or the room spinning)',
            'Loss of balance or unsteadiness',
            'Nausea or vomiting',
            'Ringing in the ears (tinnitus)',
            'Difficulty focusing the eyes'
        ],
        treatment: 'Effective treatment starts with accurate diagnosis. We perform detailed maneuvers (like Epley maneuver) for BPPV and prescribe medications for other causes. Vestibular rehabilitation exercises are also taught to improve balance.',
        localContext: 'Patients from Avanigadda, Repalle, and coastal villages trust us for resolving their vertigo issues effectively.',
        keywords: ['vertigo treatment', 'giddiness specialist', 'balance problem doctor', 'neurologist machilipatnam']
    },
    {
        slug: 'parkinsons-movement-disorders-machilipatnam',
        title: 'Parkinson’s Disease',
        shortDescription: 'Specialized care for Parkinson’s and movement disorders.',
        metaTitle: 'Parkinson’s Doctor in Machilipatnam | Tremor Treatment - Dr Bhavana Neuro',
        metaDescription: 'Expert Parkinson’s disease and movement disorder treatment in Machilipatnam. Reducing tremors and stiffness for patients from Gudivada & nearby.',
        h1: 'Parkinson’s Disease & Movement Disorders in Machilipatnam',
        intro: 'Parkinson’s disease requires long-term, compassionate management. Dr Bhavana is an expert in treating movement disorders, helping patients in Machilipatnam manage tremors, stiffness, and slowness of movement.',
        symptoms: [
            'Tremors (shaking) in hands or fingers',
            'Slowed movement (bradykinesia)',
            'Rigid muscles',
            'Impaired posture and balance',
            'Speech and writing changes'
        ],
        treatment: 'Our approach includes fine-tuning dopamine replacement therapies and other medications to maintain quality of life. We also guide patients on physical therapy and exercises that are crucial for mobility.',
        localContext: 'We provide ongoing support for elderly patients from Machilipatnam, Gudivada, and Eluru facing movement challenges.',
        keywords: ['Parkinson’s doctor in Machilipatnam', 'movement disorders clinic', 'tremor treatment', 'neurologist krishna district']
    },
    {
        slug: 'memory-loss-dementia-care-machilipatnam',
        title: 'Memory Loss & Dementia',
        shortDescription: 'Compassionate evaluation and care for memory loss and dementia.',
        metaTitle: 'Dementia Care in Machilipatnam | Memory Loss Treatment - Dr Bhavana Neuro',
        metaDescription: 'Memory loss and Alzheimer’s consultation in Machilipatnam. Compassionate dementia care for elderly patients from Krishna District & Vijayawada.',
        h1: 'Memory Loss & Dementia Care in Machilipatnam',
        intro: 'Memory loss is not always just "old age". Early diagnosis of dementia or Alzheimer’s can significantly impact care. We offer detailed memory evaluation and management in Machilipatnam.',
        symptoms: [
            'Memory loss disrupting daily life',
            'Challenges in planning or solving problems',
            'Confusion with time or place',
            'Trouble understanding visual images',
            'Withdrawal from work or social activities'
        ],
        treatment: 'treatment involves cognitive testing to identify the cause. We use medications to slow progression where possible and provide extensive counseling for caregivers on managing behavioral changes.',
        localContext: 'Families from all over Krishna District including Vijayawada and Guntur consult us for reliable guidance on dementia care.',
        keywords: ['memory loss treatment', 'dementia care in Machilipatnam', 'Alzheimer doctor near me', 'neurologist machilipatnam']
    }
];
