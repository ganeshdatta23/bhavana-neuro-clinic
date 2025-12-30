export const departmentCardStyles = {
    container: "group flex flex-col items-center text-center p-6 rounded-2xl bg-background hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border/40 hover:border-primary/20 relative overflow-hidden",
    iconWrapper: "flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F1FF] text-primary mb-4 transition-transform duration-300 group-hover:scale-110",
    icon: "h-[3.5rem] w-[3.5rem]", // ~56px
    title: "font-bold text-lg mb-2 text-foreground",
    description: "text-sm text-muted-foreground line-clamp-2 mb-4",
    cta: "font-medium text-sm flex items-center justify-center gap-1 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-teal-600"
};
