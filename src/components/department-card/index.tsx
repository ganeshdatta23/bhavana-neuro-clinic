import { LucideIcon } from "@/components/lucide-icon";
import { DepartmentCardProps } from "./types";
import { departmentCardStyles } from "./styles";

import { ArrowRight } from "lucide-react";

export function DepartmentCard({ name, icon, description }: DepartmentCardProps) {
    return (
        <div className={departmentCardStyles.container}>
            <div className={departmentCardStyles.iconWrapper}>
                <LucideIcon name={icon} className={departmentCardStyles.icon} />
            </div>
            <h3 className={departmentCardStyles.title}>{name}</h3>
            {description && <p className={departmentCardStyles.description}>{description}</p>}
            <div className={departmentCardStyles.cta}>
                Learn More <ArrowRight className="h-4 w-4" />
            </div>
        </div>
    );
}
