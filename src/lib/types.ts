export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  treats: string[];
};

export type Department = {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export type Doctor = {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  specialty: string;
  interests: string[];
  languages: string[];
  message: string;
  avatarUrl: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  avatarUrl: string;
};

export type WhyChooseUsItem = {
    title: string;
    description: string;
    icon: string;
};

export type Stat = {
    value: string;
    label: string;
};

export type Condition = {
  id: string;
  title: string;
  definition: string;
  symptoms: string[];
  whenToSeeDoctor: string;
  treatmentApproach: string;
}

export type Facility = {
  name: string;
  description: string;
  icon: string;
}

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
}
