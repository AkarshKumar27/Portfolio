import React from "react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ id, title, subtitle }) => {
  return (
    <div id={id} className="max-w-3xl mx-auto text-center mb-8 scroll-mt-24">
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
