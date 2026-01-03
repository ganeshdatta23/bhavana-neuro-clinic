"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Shield, Clock, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  address: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  department: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  name?: string;
  address?: string;
  age?: string;
  gender?: string;
  phone?: string;
  email?: string;
  department?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    department: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (!/^\d{1,3}$/.test(formData.age.trim()) || Number(formData.age) < 0 || Number(formData.age) > 120) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get the selected department name
      const selectedService = services.find(s => s.id === formData.department);
      const departmentName = selectedService ? selectedService.title : formData.department;

      // Format the message for WhatsApp (without emojis to avoid encoding issues)
      const formattedDate = new Date(formData.preferredDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const message = `Hello Doctor,

*APPOINTMENT REQUEST: DR. BHAVANA NEURO CARE*

*PATIENT INFORMATION*

• *Name:* ${formData.name}
• *Age/Gender:* ${formData.age} / ${formData.gender}
• *Phone:* ${formData.phone}
• *Department:* ${departmentName}
• *Address:* ${formData.address}

*APPOINTMENT PREFERENCE*

• *Date:* ${formattedDate}
• *Time:* ${formData.preferredTime}
${formData.message ? `• *Additional Notes:* ${formData.message}` : ''}

*SUBMISSION DETAILS*

• *Sent:* ${new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
      })}

Please acknowledge of this request and confirm the appointment slot at your earliest convenience. If this time is unavailable, please provide the next available alternative.`;

      // WhatsApp number (without + or spaces)
      const whatsappNumber = '917893959393';

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));

      // Show success toast
      toast({
        title: "✓ Redirecting to WhatsApp",
        description: "You'll be redirected to WhatsApp to send your appointment request.",
      });

      // Reset form
      setFormData({
        name: '',
        address: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        department: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
      setErrors({});

      // Redirect to WhatsApp after a brief delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Unable to submit your request. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-2 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Book an Appointment</CardTitle>
        <CardDescription>Fill out the form below and we will contact you shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-500" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Enter your address"
              aria-required="true"
              aria-invalid={!!errors.address}
              aria-describedby={errors.address ? "address-error" : undefined}
            />
            {errors.address && (
              <p id="address-error" className="text-sm text-red-500" role="alert">
                {errors.address}
              </p>
            )}
          </div>

          {/* Age & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">
                Age <span className="text-red-500">*</span>
              </Label>
              <Input
                id="age"
                type="number"
                min="0"
                max="120"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="Enter your age"
                aria-required="true"
                aria-invalid={!!errors.age}
                aria-describedby={errors.age ? "age-error" : undefined}
              />
              {errors.age && (
                <p id="age-error" className="text-sm text-red-500" role="alert">
                  {errors.age}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">
                Gender <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
              >
                <SelectTrigger id="gender" aria-label="Select gender" aria-required="true" aria-invalid={!!errors.gender} aria-describedby={errors.gender ? "gender-error" : undefined}>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p id="gender-error" className="text-sm text-red-500" role="alert">
                  {errors.gender}
                </p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter 10-digit mobile number"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-sm text-red-500" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email address"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">
              Department <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.department}
              onValueChange={(value) => setFormData({ ...formData, department: value })}
            >
              <SelectTrigger
                id="department"
                aria-label="Select your department"
                aria-required="true"
                aria-invalid={!!errors.department}
                aria-describedby={errors.department ? "department-error" : undefined}
              >
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {services.map(s => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.department && (
              <p id="department-error" className="text-sm text-red-500" role="alert">
                {errors.department}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">
                Preferred Date <span className="text-red-500">*</span>
              </Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                aria-required="true"
                aria-invalid={!!errors.preferredDate}
              />
              {errors.preferredDate && (
                <p className="text-sm text-red-500" role="alert">
                  {errors.preferredDate}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">
                Preferred Time <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
              >
                <SelectTrigger id="preferredTime" aria-invalid={!!errors.preferredTime}>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Morning (09:00 AM – 12:00 PM)">Morning (09:00 AM – 12:00 PM)</SelectItem>
                  <SelectItem value="Afternoon (12:00 PM – 04:00 PM)">Afternoon (12:00 PM – 04:00 PM)</SelectItem>
                  <SelectItem value="Evening (04:00 PM – 07:00 PM)">Evening (04:00 PM – 07:00 PM)</SelectItem>
                </SelectContent>
              </Select>
              {errors.preferredTime && (
                <p className="text-sm text-red-500" role="alert">
                  {errors.preferredTime}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your symptoms or concerns"
              rows={3}
            />
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2 text-sm text-muted-foreground bg-blue-50 dark:bg-blue-950/20 p-3 rounded-md">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
              <p>
                Appointment requests are confirmed via phone/WhatsApp within 30 minutes during business hours (9 AM–6 PM IST).
              </p>
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground bg-green-50 dark:bg-green-950/20 p-3 rounded-md">
              <Shield className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
              <p>
                Your medical information is kept confidential and used only for your care.
              </p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Preparing...
              </>
            ) : (
              <>
                <MessageCircle className="mr-2 h-5 w-5" />
                Send via WhatsApp
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
