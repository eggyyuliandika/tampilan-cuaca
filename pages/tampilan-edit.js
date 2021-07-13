import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="display1">
      <div className="navbar-edit">
        <Link href="/tampilan-menu">
          <div className="description-contentmenu">Batalkan</div>
        </Link>
        <div>Tambah Kota</div>
        <Link href="/tampilan-menu">
          <div className="description-contentmenu">Simpan</div>
        </Link>
      </div>

      <div className="display-contentedit1">
        <div className="display-contentedit2">
          <button className="button-icon">
            <Image
              className="icon"
              src="/assets/send.png"
              alt="cari"
              width="20"
              height="20"
            />
          </button>
          <div className="description-contentedit4">Denpasar</div>
        </div>
        <div>
          <button className="button-icon">
            <Image
              className="icon"
              src="/assets/cancel.png"
              alt="batal"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>

      <div className="display-contentedit1">
        <div className="display-contentedit2">
          <button class="button-icon">
            <Image
              class="icon"
              src="/assets/sort.png"
              alt="cari"
              width="20"
              height="20"
            />
          </button>
          <div className="description-contentedit3">Munduk</div>
        </div>
        <div>
          <button className="button-icon">
            <Image
              className="icon"
              src="/assets/cancel.png"
              alt="batal"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>

      <div className="display-contentedit1">
        <div className="display-contentedit2">
          <button className="button-icon">
            <Image
              className="icon"
              src="/assets/sort.png"
              alt="cari"
              width="20"
              height="20"
            />
          </button>
          <div className="description-contentedit3">Singaraja</div>
        </div>
        <div>
          <button className="button-icon">
            <img
              className="icon"
              src="/assets/cancel.png"
              alt="batal"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
