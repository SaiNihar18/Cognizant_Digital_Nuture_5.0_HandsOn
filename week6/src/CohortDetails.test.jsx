import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {
    it('should create the component', () => {
        const { container } = render(<CohortDetails cohort={CohortData[0]} />);
        expect(container).toBeTruthy();
    });

    it('should initialize the props', () => {
        const cohort = CohortData[1];
        render(<CohortDetails cohort={cohort} />);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading.textContent).toBe(cohort.cohortCode);
    });

    it('should display cohort code in h3', () => {
        render(<CohortDetails cohort={CohortData[0]} />);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading.textContent).toBe(CohortData[0].cohortCode);
    });

    it('should always render same html', () => {
        const { asFragment } = render(<CohortDetails cohort={CohortData[0]} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
