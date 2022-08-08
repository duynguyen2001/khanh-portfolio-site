import React from 'react';
import ArrowIcon from '../ArrowIcon';
import Link from 'next/dist/client/link';
import PropTypes from 'prop-types';

export const CategoryButton = ({ slug, title, ...props }) => (
  <Link
    href={slug === '' ? '/blog-posts' : '/blog-posts/[slug]'}
    as={slug === '' ? '' : `/blog-posts/${slug}`}
  >
    <button className="bg-white dark:bg-black font-ven hover:bg-primary dark:hover:bg-primarycontrast text-primary dark:text-primarycontrast hover:text-white dark:hover:text-white font-bold py-2 px-4 border-b-4 border-primary dark:border-primarycontrast hover:border-primary dark:hover:border-primarycontrast rounded">
      <a>{title}</a>
    </button>
  </Link>
);

CategoryButton.propTypes = {
  /***
   * slug id for the posts
   */
  slug: PropTypes.string,
  /***
   * title for the posts
   */
  title: PropTypes.string,
};

CategoryButton.defaultProps = {
  slug: '',
  title: 'This is the title',
};
