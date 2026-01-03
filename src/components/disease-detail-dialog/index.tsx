'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertCircle, CheckCircle2, ShieldAlert, Info } from 'lucide-react';
import type { NeurologicalCondition } from '@/lib/disease-utils';

type DiseaseDetailDialogProps = {
    disease: NeurologicalCondition | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function DiseaseDetailDialog({
    disease,
    open,
    onOpenChange,
}: DiseaseDetailDialogProps) {
    if (!disease) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <DialogHeader className="px-6 pt-6 pb-4 border-b">
                    <DialogTitle className="text-2xl font-bold text-primary">
                        {disease.condition}
                    </DialogTitle>
                    <DialogDescription className="text-base mt-2">
                        Comprehensive medical information and patient guidance
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="h-[calc(90vh-120px)]">
                    <div className="px-6 pb-6">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 mb-6">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                                <TabsTrigger value="myths">Myth Busting</TabsTrigger>
                                <TabsTrigger value="precautions">Precautions</TabsTrigger>
                            </TabsList>

                            {/* Clinical Overview Tab */}
                            <TabsContent value="overview" className="space-y-4">
                                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
                                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                            Clinical Overview
                                        </h3>
                                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                                            {disease.clinical_overview}
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Detailed Symptoms Tab */}
                            <TabsContent value="symptoms" className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-orange-600" />
                                        Detailed Symptoms
                                    </h3>
                                    <div className="space-y-3">
                                        {disease.detailed_symptoms.map((symptom, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                                            >
                                                <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                                <p className="text-sm leading-relaxed">{symptom}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Myth Busting Tab */}
                            <TabsContent value="myths" className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <ShieldAlert className="h-5 w-5 text-purple-600" />
                                        Common Myths vs. Medical Facts
                                    </h3>
                                    <div className="space-y-4">
                                        {disease.myth_busting.map((item, index) => (
                                            <div
                                                key={index}
                                                className="border rounded-lg overflow-hidden"
                                            >
                                                <Alert className="border-0 border-b border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none">
                                                    <AlertCircle className="h-4 w-4 text-red-600" />
                                                    <AlertDescription className="ml-2">
                                                        <Badge
                                                            variant="destructive"
                                                            className="mb-2 text-xs"
                                                        >
                                                            MYTH
                                                        </Badge>
                                                        <p className="text-sm font-medium text-red-900 dark:text-red-100">
                                                            {item.myth}
                                                        </p>
                                                    </AlertDescription>
                                                </Alert>
                                                <Alert className="border-0 bg-green-50 dark:bg-green-950/20 rounded-none">
                                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                    <AlertDescription className="ml-2">
                                                        <Badge className="mb-2 text-xs bg-green-600">
                                                            REALITY
                                                        </Badge>
                                                        <p className="text-sm text-green-900 dark:text-green-100">
                                                            {item.reality}
                                                        </p>
                                                        {item.fact_check && (
                                                            <p className="text-xs text-green-700 dark:text-green-300 mt-2 italic">
                                                                ℹ️ {item.fact_check}
                                                            </p>
                                                        )}
                                                    </AlertDescription>
                                                </Alert>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Precautionary Steps Tab */}
                            <TabsContent value="precautions" className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <ShieldAlert className="h-5 w-5 text-green-600" />
                                        Precautionary Steps & Management
                                    </h3>
                                    <div className="space-y-3">
                                        {disease.precautionary_steps.map((step, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900"
                                            >
                                                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold">
                                                    {index + 1}
                                                </div>
                                                <p className="text-sm text-green-900 dark:text-green-100 leading-relaxed">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* Footer Note */}
                        <div className="mt-6 p-4 bg-muted rounded-lg">
                            <p className="text-xs text-muted-foreground">
                                <strong>Medical Disclaimer:</strong> This information is for
                                educational purposes only and should not replace professional
                                medical advice. Always consult with Dr. Parasa Lakshmi Bhavana or
                                a qualified healthcare provider for proper diagnosis and
                                treatment.
                            </p>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
