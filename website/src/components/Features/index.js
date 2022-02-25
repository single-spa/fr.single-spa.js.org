import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import classnames from 'classnames';

const data = [
  {
    content:
      'Utilisez plusieurs cadres de travail dans une application mono-page, ce qui vous permet d\'orgniser le code par fonctionnalité et d\'avoir potentiellement des applications Angular, React, Vue.js, etc. vivant toutes en harmonie.',
    imageUrl: 'img/icons/148705-essential-collection/svg/paper-plane.svg',
    title: 'Liberté par rapport aux cadres de travail',
  },
  {
    content: `Faites coexister vos nouvelles applications à côté des anciennes. Vous développez les applications, single-spa les fait fonctionner ensemble et ne les charge pas tant qu'elles ne sont pas nécessaires.`,
    imageUrl: 'img/icons/148705-essential-collection/svg/download.svg',
    title: 'Chargement décalé des applications',
  },
  {
    content:
      'Combinez plusieurs micro applications, permettant ainsi à vos équipes de choisir chacune leur technonologie. Restez agile à mesure que votre équipe, votre produit et votre pile technologique grandissent et changent au fil du temps.',
    imageUrl: 'img/icons/148705-essential-collection/svg/settings-1.svg',
    title: 'Microservices côté client',
  },
];

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <div className="row">
          {data.map(({ title, content, imageUrl }, idx) => (
            <div key={idx} className={classnames('col col--4', styles.feature)}>
              {imageUrl && (
                <div className="margin-bottom--lg">
                  <img
                    className={styles.featureImage}
                    src={useBaseUrl(imageUrl)}
                    alt={title}
                  />
                </div>
              )}
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
