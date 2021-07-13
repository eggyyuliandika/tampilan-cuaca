import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="display1">
      <div className="navbar-menu">
        <div>
          <button className="button-icon">
            <Link href="/">
              <Image
                width="20"
                height="20"
                className="icon"
                src="/assets/back.png"
                alt="back"
              />
            </Link>
          </button>
        </div>
        <div className="description-navbarmenu">Tambah Kota</div>
        <Link href="/tampilan-edit">
          <div className="description-navbarmenu1">Edit</div>
        </Link>
      </div>

      <div className="content-menu">
        <div>Munduk</div>
      </div>
      <div className="content-menu">
        <div>Singaraja</div>
      </div>
      <div className="content-menu">
        <Link href="/">
          <div className="description-contentmenu">Denpasar</div>
        </Link>
      </div>

      <div className="end-menu">
        <div className="display-endmenu">
          <button className="button-icon">
            <Link href="/tampilan-tambahkan">
              <Image
                class="icon"
                src="/assets/plus.png"
                alt="plus"
                width="20"
                height="20"
              />
            </Link>
          </button>
        </div>
        <div className="display-endmenu1">
          <div>Menambah</div>
        </div>
      </div>
    </div>
  );
}
