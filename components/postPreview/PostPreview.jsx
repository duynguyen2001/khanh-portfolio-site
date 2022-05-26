import React from 'react';
import ArrowIcon from '../ArrowIcon';
import Link from 'next/dist/client/link';
import PropTypes from 'prop-types';
const dateParser= (date) => {
  const newDate = new Date(date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return newDate.toLocaleDateString(undefined, options);
};
export const PostPreview = ({ slug, title, description, date, link, ...props }) => (
  <li
    key={slug}
    className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
    {...props}
  >
    <Link as={link + slug} href={`${link}+[slug]`}>
      <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
        {date && <p className="uppercase mb-3 font-bold opacity-60">{dateParser(date)}</p>}
        <h2 className="text-2xl md:text-3xl font-ven">{title}</h2>
        {description && (
          <p className="mt-3 text-lg opacity-60">{description}</p>
        )}
        <ArrowIcon className="mt-4" />
      </a>
    </Link>
  </li>
);

PostPreview.propTypes = {
  /***
   * slug id for the posts
   */
  slug: PropTypes.string,
  /***
   * title for the posts
   */
  title: PropTypes.string,
  /***
   * description for the posts
   */
  description: PropTypes.string,
  /***
   * date for the posts
   */
  date: PropTypes.string,
  /***
   * link to the slug
   */
   link: PropTypes.string,
};

PostPreview.defaultProps = {
  slug: "/about-me",
  title: "This is the title",
  description: "This is the description",
  date: "2022-05-23T16:35:34.122Z"
};
