import Image from "next/image";

const email = "15827536077@163.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳至主要内容
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="慨 Kairos 首页">
          <span className="brand-mark" aria-hidden="true">
            <Image
              src={`${basePath}/images/kairos-logo.png`}
              alt=""
              width={2048}
              height={2048}
              priority
            />
          </span>
          <span className="brand-name">慨 Kairos</span>
        </a>

        <nav className="site-nav" aria-label="主要导航">
          <a href="#works">
            作品 <span>Works</span>
          </a>
          <a href="#about">
            关于 <span>About</span>
          </a>
          <a href="#contact">
            联络 <span>Contact</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-meta" aria-label="品牌信息">
            <span>Independent Publishing</span>
            <span>Guangzhou · 2026</span>
          </div>

          <div className="hero-title-wrap">
            <p className="hero-eyebrow">诗歌 · 设计 · 印刷 · 纸质媒介</p>
            <h1 id="hero-title">
              <span className="hero-cn">慨</span>
              <span className="hero-en">Kairos</span>
            </h1>
          </div>

          <div className="hero-intro">
            <p lang="zh-CN">
              从诗歌出发，探索文字、设计、印刷与纸质媒介之间的可能。
            </p>
            <p lang="en">
              Beginning with poetry, we explore the possibilities between
              language, design, print, and paper.
            </p>
          </div>

          <a className="scroll-cue" href="#works" aria-label="查看首部作品">
            <span>01</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="works-section" id="works" aria-labelledby="works-title">
          <div className="section-heading">
            <p>01 — Selected Works</p>
            <h2 id="works-title">出版物</h2>
            <span>Publications</span>
          </div>

          <article className="publication">
            <div className="publication-copy">
              <p className="publication-index">KAIROS 001 / 2026</p>
              <h3>
                不知所措的心
                <span lang="en">A Heart at a Loss</span>
              </h3>
              <div className="publication-author">
                <span>黄语蝶</span>
                <span lang="en">Yudie Huang</span>
              </div>

              <dl className="publication-details">
                <div>
                  <dt>类型 / Format</dt>
                  <dd>双语诗歌摄影集</dd>
                </div>
                <div>
                  <dt>语言 / Language</dt>
                  <dd>中文 / English</dd>
                </div>
                <div>
                  <dt>状态 / Status</dt>
                  <dd>首部作品 / First title</dd>
                </div>
              </dl>

              <a
                className="text-link"
                href={`mailto:${email}?subject=${encodeURIComponent(
                  "咨询《不知所措的心》 / A Heart at a Loss",
                )}`}
              >
                获取出版信息 <span aria-hidden="true">↗</span>
              </a>
            </div>

            <figure className="publication-visual">
              <div className="image-frame">
                <Image
                  src={`${basePath}/images/a-heart-at-a-loss.png`}
                  alt="黄语蝶双语诗歌摄影集《不知所措的心》书籍样机：浅蓝色布面精装封面及书脊、内页边缘细节"
                  width={695}
                  height={1187}
                  sizes="(max-width: 760px) 100vw, 56vw"
                />
              </div>
              <figcaption>
                <span>Cover &amp; object study</span>
                <span>© Kairos 2026</span>
              </figcaption>
            </figure>
          </article>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-word" aria-hidden="true">
            καιρός
          </div>

          <div className="section-heading section-heading-light">
            <p>02 — About</p>
            <h2 id="about-title">关于慨</h2>
            <span>About Kairos</span>
          </div>

          <div className="about-grid">
            <p className="about-lead">
              每一本出版物，
              <br />
              都是一次不可复制的 Kairos。
            </p>

            <div className="about-copy">
              <p>
                慨 Kairos 由两位来自福建的青年诗人于 2026
                年在广州共同创立。“慨”取自二人名字的同音，也呼应古希腊语
                Kairos 所指向的“决定性瞬间”。
              </p>
              <p>
                从诗歌创作、图书编辑与设计，到文化空间与艺术出版的实践。我们从诗歌出发，持续探索文字、设计、印刷与纸质媒介之间的可能。
              </p>
            </div>
          </div>

          <div className="about-footnote">
            <span>KAIROS / kairós / n.</span>
            <p>the opportune, decisive moment</p>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <p>03 — Contact</p>
            <h2 id="contact-title">与我们联系</h2>
            <span>Get in touch</span>
          </div>

          <div className="contact-grid">
            <p>
              出版咨询、作者投稿、书店合作及文化项目，欢迎来信。
              <span lang="en">
                For publishing, submissions, stockists, and collaborations.
              </span>
            </p>

            <a className="email-link" href={`mailto:${email}`}>
              {email}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="social-list" aria-label="社交媒体账号">
            <div>
              <span>小红书 / RED</span>
              <strong>@慨Kairos</strong>
            </div>
            <div>
              <span>微信公众号 / WeChat</span>
              <strong>@慨Kairos</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          慨 Kairos
        </a>
        <p>Poetry · Design · Independent Publishing</p>
        <p>Guangzhou, China · 2026</p>
      </footer>
    </>
  );
}
