import { LucideIcon } from "@/components/lucide-icon";
import { DepartmentCardProps } from "./types";
import { departmentCardStyles } from "./styles";

import { ArrowRight } from "lucide-react";

export function DepartmentCard({ name, icon, description, onClick }: DepartmentCardProps) {
    return (
        <div
            className={`${departmentCardStyles.container} ${onClick ? 'cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300' : ''}`}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
        >
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
