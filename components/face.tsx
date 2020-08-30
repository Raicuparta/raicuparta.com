import styles from './face.module.scss';

export const Face = () => (
  <picture>
    <source srcSet="img/face.webp" type="image/webp" />
    <source srcSet="img/face.jpg" type="image/jpeg" />
    <img className={styles.image} src="img/face.jpg" alt="" />
    <style jsx>{styles}</style>
  </picture>
);
