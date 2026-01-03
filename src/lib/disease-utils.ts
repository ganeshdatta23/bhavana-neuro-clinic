export type MythBusting = {
    myth: string;
    reality: string;
    fact_check?: string;
};

export type NeurologicalCondition = {
    condition: string;
    clinical_overview: string;
    detailed_symptoms: string[];
    myth_busting: MythBusting[];
    precautionary_steps: string[];
};

export type DiseaseData = {
    medical_database_title: string;
    last_updated: string;
    data_format: string;
    neurological_conditions: NeurologicalCondition[];
};

// Mapping between service IDs and disease condition names
export const DISEASE_MAPPING: Record<string, string> = {
    'headache-migraine': 'Headache & Migraine',
    'stroke-paralysis': 'Stroke & Paralysis',
    'epilepsy': 'Epilepsy (Fits)',
    'vertigo': 'Vertigo (Dizziness)',
    'parkinsons': "Parkinson's Disease",
    'memory-dementia': 'Memory Loss & Dementia',
};

export function getDiseaseByServiceId(
    serviceId: string,
    diseaseData: DiseaseData
): NeurologicalCondition | null {
    const conditionName = DISEASE_MAPPING[serviceId];
    if (!conditionName) return null;

    return (
        diseaseData.neurological_conditions.find(
            (condition) => condition.condition === conditionName
        ) || null
    );
}

export function normalizeDiseaseConditionName(condition: string): string {
    return condition
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
}
