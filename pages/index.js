import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <div></div>
        <div>Denpasar</div>
        <div>
          <button className="button-icon">
            <Link href="/tampilan-menu">
              <Image
                width="20"
                height="20"
                className="icon"
                src="/assets/menu.png"
                alt="menu"
              />
            </Link>
          </button>
        </div>
      </div>

      <div className="display-content">
        <div className="nav-content">
          <div className="description-navcontent">28</div>
          <div>
            <sup className="hero">o</sup>
          </div>
        </div>
        <div className="description-navcontent2">Sedikit Berawan</div>
      </div>

      <div className="display-descriptioncontent">
        <div>Jum Hari Ini</div>
        <div className="description-content">
          <div>28</div>
          <div>
            <sup className="hero-content">o</sup>
          </div>
          <div>22</div>
          <div>
            <sup className="hero-content">o</sup>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Sab</div>
          <div className="button-content">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>23</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>28</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Min</div>
          <div className="button-content">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>28</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>21</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Sen</div>
          <div className="button-content">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>20</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>24</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Sel</div>
          <div className="button-content1">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>22</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>25</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Rab</div>
          <div className="button-content">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>21</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>18</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Kam</div>
          <div className="button-content">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>25</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>28</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Jum</div>
          <div className="button-content">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>28</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>27</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content">
          <div>Sab</div>
          <div className="button-content">
            <button className="button-icon">
              <Image
                className="icon"
                width="20"
                height="20"
                src="/assets/storm.png"
                alt="storm"
              />
            </button>
          </div>
          <div className="description-content">
            <div>22</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
            <div>29</div>
            <div>
              <sup className="hero-content">o</sup>
            </div>
          </div>
        </div>
      </div>

      <div className="note">
        <div className="isi-note">
          <img
            className="logo"
            width="30"
            height="30"
            src="/assets/thermometer.png"
            alt="icon thermometer"
          />
          <div className="description-note">
            <div>24.7</div>
            <div>
              <sup>o</sup>
            </div>
          </div>
        </div>

        <div className="isi-note">
          <img
            className="logo"
            width="30"
            height="30"
            src="./assets/water-drop.png"
            alt="icon water"
          />
          <div className="description-note">
            <div>76%</div>
          </div>
        </div>

        <div className="isi-note">
          <div className="isi-note1">
            <img
              className="logo"
              width="30"
              height="30"
              src="/assets/bar-chart.png"
              alt="icon grafik"
            />
          </div>
          <div className="isi-note2">14.5 km</div>
        </div>
      </div>

      <div className="isi-note3">
        <div className="isi-note4">
          <div className="isi-note5">
            <img src="/assets/wind.png" alt="icon angin" class="img-note" />
          </div>
          <div className="isi-note6">31.3 km/h</div>
        </div>

        <div className="isi-note7">
          <div className="isi-note8">
            <img
              src="/assets/ultraviolet.png"
              width="30"
              height="30"
              alt="icon sinar uv"
              class="img-note"
            />
          </div>
          <div className="isi-note9">
            <div className="isi-note10">Tinggi</div>
          </div>
        </div>

        <div>
          <div className="isi-note11">
            <div className="isi-note12">
              <img
                height="30"
                width="30"
                src="/assets/download-speed.png"
                alt="icon speedometer"
                className="img-note"
              />
            </div>
            <div>
              <div>1010.5 mb</div>
            </div>
          </div>
        </div>
      </div>

      <div className="end">
        <img className="img-end" src="/assets/logo accu weather.png" />
      </div>
    </div>
  );
}
