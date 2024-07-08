import Link from 'next/link';

const HeaderSocialMedia = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/">FB</Link></li>
                <li><Link href="/products">Insta</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      );
}

export default HeaderSocialMedia