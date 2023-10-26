import React, { ReactNode } from 'react';
import { paramCase } from 'param-case';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export function CardSection({
  id,
  title,
  icon,
  children,
  description,
  className,
  hasSubSections = false,
  HeadingTag = 'h1',
}: {
  id?: string;
  title?: string;
  icon?: JSX.Element;
  children: ReactNode;
  description?: ReactNode;
  hasSubSections?: boolean;
  HeadingTag?: any;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'homepage-section',
        hasSubSections && 'has-sub-sections',
        className
      )}
    >
      {title && <span><HeadingTag id={id ?? paramCase(title)}>{title}</HeadingTag></span>}
      {description && <p className="section-description">{description}</p>}
      <div className="section-content">{children}</div>
    </div>
  );
}

export function Card({
  id,
  icon,
  title,
  description,
  to,
}: {
  id?: string;
  icon?: JSX.Element;
  title?: string;
  description?: string;
  to: string;
}) {
  return (
    <Link to={to} className="homepage-card">
      {icon && <div className="icon">{icon}</div>}
      <div className="card-content">
        <div className="title" id={id && paramCase(title)}>
          {title}
        </div>
        {description && <div className="description">{description}</div>}
      </div>
    </Link>
  );
}
