import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="display1">
      <div className="navbar-tambahkan">
        <div className="buttonnavbar-tambahkan">
          <button className="button-icon">
            <Link href="/tampilan-menu">
              <Image
                className="icon"
                src="/assets/back.png"
                width="50"
                height="50"
                alt="back"
              />
            </Link>
          </button>
        </div>
        <div className="display-navbartambahkan">
          <div>
            <button class="button-icon">
              <Image
                class="icon"
                src="/assets/loupe.png"
                width="20"
                height="20"
                alt="loupe"
              />
            </button>
          </div>
          <div>Cari Kota</div>
        </div>
      </div>

      <div className="description-contenttambahkan">Kota domestik</div>
      <div className="displaycontent-tambahkan">
        <div className="displaycontent1-tambahkan">
          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan1">Posisi</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Jakarta</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Surabaya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="displaycontent-tambahkan">
        <div className="displaycontent1-tambahkan">
          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Medan</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Bandung</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Semarang</div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-contenttambahkan">
        Kota - kota internasional
      </div>

      <div className="displaycontent-tambahkan">
        <div className="displaycontent1-tambahkan">
          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">New York</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Paris</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">London</div>
            </div>
          </div>
        </div>
      </div>

      <div className="displaycontent-tambahkan">
        <div className="displaycontent1-tambahkan">
          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Tokyo</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Rome</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Dubai</div>
            </div>
          </div>
        </div>
      </div>

      <div className="displaycontent-tambahkan">
        <div className="displaycontent1-tambahkan">
          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Moscow</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Sydney</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Hong Kong</div>
            </div>
          </div>
        </div>
      </div>

      <div className="displaycontent-tambahkan">
        <div className="displaycontent1-tambahkan">
          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Singapore</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Beijing</div>
            </div>
          </div>

          <div>
            <div className="content-tambahkan">
              <div className="description-contenttambahkan2">Athens</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
