import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <div>

<div className="py-12  bg-black">
  <footer className="text-center lg:text-left text-white" >
    <div className="container p-4 pb-0">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-bold">MusicStream</h6>
            <p className='text-sm text-gray-400'>
              Discover the latest hits, your favorite tracks, and all the music you love in one place. MusicStream offers you a world of music at your fingertips.
            </p>
          </div>
          <div className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-bold">Explore</h6>
            <p className='text-sm text-gray-400'><Link href="/genres">Genres</Link></p>
            <p className='text-sm text-gray-400'><Link href="/new-releases">New Releases</Link></p>
            <p className='text-sm text-gray-400'><Link href="/playlists">Playlists</Link></p>
            <p className='text-sm text-gray-400'><Link href="/artists">Artists</Link></p>
          </div>
          <div className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-bold">Community</h6>
            <p className='text-sm text-gray-400'><Link href="/events">Events</Link></p>
            <p className='text-sm text-gray-400'><Link href="/forums">Forums</Link></p>
            <p className='text-sm text-gray-400'><Link href="/blog">Blog</Link></p>
            <p className='text-sm text-gray-400'><Link href="/support">Support</Link></p>
          </div>
          <div className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-bold">Get in Touch</h6>
            <p className='text-sm text-gray-400'><i className="fas fa-envelope mr-3"></i> support@musicstream.com</p>
            <p className='text-sm text-gray-400'><i className="fas fa-print mr-3"></i> +1 800 555 5678</p>
            <p className='text-sm text-gray-400'><i className="fas fa-phone mr-3"></i> +1 800 555 1234</p>
          </div>
           
        </div>
      </section>

      <hr  className="mt-14 my-3 border-gray-400" />

      <section className="p-3  pt-0">
        <div className="flex flex-col md:flex-row md:justify-center items-center">
          <div className="mb-4 md:mb-0">
            <div className="mt-6 p-3 text-center md:text-left text-teal-500">
              © 2024 MusicStream:
              <Link href="https://musicstream.com">musicstream.com</Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end space-x-3">
            <Link href="https://facebook.com/musicstream">
              <p className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                <i className="fab fa-facebook-f"></i>
              </p>
            </Link>
            <Link href="https://twitter.com/musicstream">
              <p className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                <i className="fab fa-twitter"></i>
              </p>
            </Link>
            <Link href="https://plus.google.com/musicstream">
              <p className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                <i className="fab fa-google"></i>
              </p>
            </Link>
            <Link href="https://instagram.com/musicstream">
              <p className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                <i className="fab fa-instagram"></i>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>


    </div>
  )
}

export default Footer
