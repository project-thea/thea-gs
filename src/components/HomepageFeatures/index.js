import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Haulage Tracking',
    Svg: require('@site/static/img/undraw_map_dark_re_36sy.svg').default,
    description: (
      <>
        THEA-GS is targeted digital contact tracing for haulage. It is tracking is restricted   to road network 
      </>
    ),
  },
  {
    title: 'Exposure notification',
    Svg: require('@site/static/img/undraw_reminders_re_gtyb.svg').default,
    description: (
      <>
        THEA-GS detects, assess risk and notifies haulage drivers. The system provides a risk map of the road network
.
		
      </>
    ),
  },
  {
    title: 'Epidemiological parameters',
    Svg: require('@site/static/img/undraw_growing_re_olpi.svg').default,
    description: (
      <>
        THEA-GS intelligently process the large datasets to derive critical epidemiological parameters such as transmission rate, positive predictive values
      </>
    ),
  },
  {
    title: 'Interoperability',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        THEA-GS easily integrates with existing laboratory information systems as well as national public health digital infrastructure

      </>
    ),
  },
  {
    title: 'Web Access',
    Svg: require('@site/static/img/undraw_progressive_app_m-9-ms.svg').default,
    description: (
      <>
        THEA-GS has an intuitive web user interface for management of the system by public health
      </>
    ),
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/undraw_safe_re_kiil.svg').default,
    description: (
      <>
        THEA-GS has been developed in consultation with stakeholders therefore it embodies security feature tailored to the sector
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
