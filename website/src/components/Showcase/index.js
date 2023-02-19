import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import users from '@site/src/data/users';
import styles from './styles.module.css';

export const Showcase = ({ showAll }) => {
  const { siteConfig = {} } = useDocusaurusContext();

  const showcase = (showAll
    ? users
    : users.filter(user => {
        return user.pinned;
      })
  ).map((user, i) => {
    return (
      <a key={i} className={styles.showcaseLogo} href={user.infoLink}>
        <img src={useBaseUrl(user.image)} title={user.caption} />
      </a>
    );
  });

  return (
    <section
      className={classnames('text--center margin-top--xl', styles.showcase)}>
      <h2
        className={classnames('showcaseHeading', {
          [styles.showcaseHeadingColored]: !showAll,
        })}>
        Who&apos;s Using This?
      </h2>
      <p>Ce projet est utilisé par ces organisations</p>
      <div className={styles.showcaseLogos}>{showcase}</div>
      {showAll ? (
        <>
          <p>Utilisez-vous ce projet?</p>
          <a
            href={`${siteConfig.customFields.repoUrl}/edit/master/website/src/data/users.js`}
            className="button">
            Ajoutez votre entreprise
          </a>
        </>
      ) : (
        <div className="more-users">
          <a className="button" href={useBaseUrl('users')}>
            Plus d'utilisateurs de {siteConfig.title}
          </a>
        </div>
      )}
    </section>
  );
};

Showcase.propTypes = { showAll: PropTypes.bool };

Showcase.defaultProps = { showAll: false };
