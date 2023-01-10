import React, { HTMLProps } from 'react';
import cn from 'classnames';
import './ListaPagina.css';


type ListaPaginaProps = HTMLProps<HTMLAnchorElement> & { active?: boolean };

const PaginaLink = ({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: ListaPaginaProps) => {
  const customClassName = cn('page-link', className, {
    active,
    disabled,
  });

  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={active ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}

export default PaginaLink