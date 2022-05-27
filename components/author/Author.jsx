import React from 'react';
import ArrowIcon from '../ArrowIcon';
import Link from 'next/dist/client/link';
import PropTypes from 'prop-types';

const dateParser = (date) => {
  const newDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return newDate.toLocaleDateString(undefined, options);
};
export const Author = ({ slug, author, bio, imageURL, ...props }) => (
  <div
    key={slug}
    className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
    {...props}
  >
    <Link as={`../author/${slug}`} href={'../author/[slug]'}>
      <a>
        <div className="content-center	py-6 lg:py-10 px-6 md:px-0 flex-col lg:px-16 flex justify-between items-center focus:outline-none md:flex-row focus:ring-4  w-full">
          <div className="flex flex-col items-center flex-auto md:w-1/4">
            <img
              className="w-20 h-20 rounded-full"
              src={imageURL}
              alt="Rounded avatar"
            />

            <h2 className="text-2xl md:text-2xl font-ven text-primary dark:text-primarycontrast text-center ">
              {author}
            </h2>
          </div>
          <div className="flex flex-col flex-auto md:w-1/2">
            {bio.substring(0, 200) + '...'}
          </div>
          <div className="flex flex-col items-center flex-auto md:w-1/4">
            <ArrowIcon className="mt-4" />
          </div>
        </div>
      </a>
    </Link>
  </div>
);

Author.propTypes = {
  /***
   * slug id for the author
   */
  slug: PropTypes.string,
  /***
   * title for the author
   */
  author: PropTypes.string,
  /***
   * bio for the author
   */
  bio: PropTypes.string,
  /***
   * imageURL for the author
   */
  imageURL: PropTypes.string,
};

Author.defaultProps = {
  slug: '',
  title: 'This is the title',
  author: 'author',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lorem vitae eros aliquet facilisis. Nullam cursus viverra euismod. Etiam molestie congue tortor, quis tristique arcu fermentum sed. Nunc quis rhoncus mauris, eu cursus lacus. Suspendisse mattis lectus ipsum. Nulla elit neque, vulputate sit amet nisl ac, finibus consequat justo. Aliquam quis suscipit metus, in faucibus ipsum. Cras vestibulum magna at nisi egestas gravida.',
  imageURL:
    'https://cdn.sanity.io/images/7pa1r3zi/blogs/7938184f9de7365e57835e654820c8113e057ccd-820x832.jpg?fit=max&w=600&h=600',
};
