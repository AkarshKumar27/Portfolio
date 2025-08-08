interface SkillBadgeProps {
  label: string;
}

const SkillBadge = ({ label }: SkillBadgeProps) => (
  <span className="inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">
    {label}
  </span>
);

export default SkillBadge;
