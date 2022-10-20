import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Subject Tracking',
    Svg: require('@site/static/img/undraw_map_dark_re_36sy.svg').default,
    description: (
      <>
        THEA-GS only tracks subjects as they move on road network. 
      </>
    ),
  },
  {
    title: 'Exposure notification',
    Svg: require('@site/static/img/undraw_reminders_re_gtyb.svg').default,
    description: (
      <>
        THEA-GS detects, reports , and notifies subjects that are exposed to a pandemic. In addition, 
		it detects hotspots.
		
      </>
    ),
  },
  {
    title: 'Infection rate detection',
    Svg: require('@site/static/img/undraw_growing_re_olpi.svg').default,
    description: (
      <>
        Automatically detects the infection of diseases and notifies public health officials
      </>
    ),
  },
  {
    title: 'Easy integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        THEA-GS easily integrates with existing systems to collect extra data to enrich analysis.
      </>
    ),
  },
  {
    title: 'Web Access',
    Svg: require('@site/static/img/undraw_progressive_app_m-9-ms.svg').default,
    description: (
      <>
        Intuitive web user interface for management and access to analysis results.
      </>
    ),
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/undraw_safe_re_kiil.svg').default,
    description: (
      <>
        Security of subject data is maintained through encryption of key information, access logs, and geo-fencing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
