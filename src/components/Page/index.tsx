/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { type ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

interface PageHeaderProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div
      css={css`
        display: flex;
        width: 100vw;
        min-height: 100vh;
        overflow-y: auto;
        gap: 24px;
        background-color: #f5f5f5;
        flex-direction: column;
      `}
    >
      {children}
    </div>
  );
}



export function PageHeader({ children }: PageHeaderProps) {
  return (
    <header
      css={css`
        background: white;
        padding: 10px;
        border-radius: 4px;
        box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
      `}
    >
      {children}
    </header>
  );
}

interface PageContentProps {
  children: ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <main
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
        flex-wrap: wrap;
      `}
    >
      {children}
    </main>
  );
}

interface PageSectionProps {
  children: ReactNode;
}

export function PageSection({ children }: PageSectionProps) {
  return (
    <section
      css={css`
        flex: 1;
        min-width: 300px;
        background: white;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
      `}
    >
      {children}
    </section>
  );
}

interface PageFooterProps {
  children: ReactNode;
}

export function PageFooter({ children }: PageFooterProps) {
  return (
    <footer
      css={css`
        background: white;
        border-radius: 4px;
        box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
        text-align: center;
        color: #888;
        margin: 0
      `}
    >
      {children}
    </footer>
  );
}