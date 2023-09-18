import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { supportedLanguages } from '../../Utilities/SupportedLanguages.js'
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion'
import usf from '../../assets/images/usf.webp'
import uae from '../../assets/images/uae.webp'
import './navbar.css'
function NavBar() {
    const [settings, setSettings] = useState()
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    useEffect(() => {
        settingsData()
    }, [])

    const settingsData = async () => {
        //   try {

        //     let data = await getWebsiteSettings();
        //     setSettings(data?.data?.data)
        //     // console.log(data)
        //   } catch (err) {
        //     console.log(err)

        //   }
    }
    const navigate = useNavigate()
    const { hash } = window.location;
    const [open, setOpen] = useState(false);

    const isOpen = () => setOpen(!open)
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "white"
        },
        visible: {
            pathLength: 1,
            fill: "white"
        }
    }

    useEffect(() => {
        console.log(lang)
    }, [lang])
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                const offset = 100;
                const topPosition = element.offsetTop - offset;
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth',
                })
            }
        } else if (window.location.href === window.location.origin + "/") {
            window.scrollTo({ top: 0 })
        }
    }, [hash])

    const item = { exit: { opacity: 0, height: 0, transition: { ease: "easeInOut", duration: 0.3, delay: 1.2 } } }

    const navigation = (path) => {
        navigate(path)
        setOpen(!open)
    }

    function changeLanguages(newlang) {
        if (newlang === lang) return
        setLang(newlang)
        if (newlang === 'ar') {
            i18n?.changeLanguage('ar')
            localStorage.setItem('i18nextLng', 'ar');
            window.location.reload();
        } else if (newlang === 'en') {
            i18n?.changeLanguage('en')
            localStorage.setItem('i18nextLng', 'en')
            window.location.reload();
        }
    }

    return (
        <>
            <nav className='navContainer lg-row d-flex gx-0'>
                <div className='col-lg-3  d-flex justify-content-start'>
                    <img className='logo containerWrapper ' style={{ width: '257px' }} src="./logo.svg" alt="" />
                </div>
                <div className='navlinks  col-lg-6 d-lg-flex  justify-content-lg-end justify-content-center align-items-center'>
                    <NavLink to={'/'}>{t('home')}</NavLink>
                    <NavLink to={'#about-us'}>{t('about-us')}</NavLink>
                    <NavLink to={'/specifications'}>{t('specifications')}</NavLink>
                    <NavLink to={'/faqs'}>{t('FAQ`s')}</NavLink>
                    <NavLink> <button className="btn text-white dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {lang === 'en'
                            ? <> <img style={{ width: "25px", marginRight: "7px", borderRadius: "2px" }} src="usf.webp" alt="sa" />En </>
                            : <> <img style={{ width: "25px", marginRight: "7px", borderRadius: "2px" }}  src="uae.webp" alt="sa" /> Ar </>}
                    </button>
                        <ul className="dropdown-menu">
                            {supportedLanguages?.map((language, index) => (
                                <li key={index} className="py-0 languageName " id='langDropDown' style={{ cursor: 'pointer' }} onClick={() => changeLanguages(language.slug)}><span className="dropdown-item">{t(language.name)}</span></li>
                            ))}
                        </ul>
                    </NavLink>
                </div>
                <div className='callus col-lg-3 p-0 justify-content-center align-items-center bg-white'>{t('call-us')}:  <span className='mx-2'> 084 234 56 789</span> </div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 400, damping: 7, duration: 0.2 }} className="menu curs navbar-toggler" onClick={isOpen}>
                    {!open ? <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="white" height="24" viewBox="0 0 24 24"><motion.path variants={icon} fill="black" initial="hidden" animate="visible" d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
                        : <svg height="24" fill="black" viewBox="0 0 512 512" width="24" ><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg>
                    }
                </motion.div>
            </nav>
            <AnimatePresence className={`mobile`} >
        {
          open && (
            <motion.div className="dropdown fs-18" variants={item} initial={{ height: 0, opacity: 0 }} animate={{ height: "460px", opacity: 1 }} transition={{ duration: .5 }} exit={{ height: 0, opacity: 0, delay: 0 }}>
              <motion.div className='m-2 curs' onClick={() => navigation('/')} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .8 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: 1 } }} >
                <motion.div className='m-2 curs' whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 5 }}>{t('home')}</motion.div>

              </motion.div>
              <motion.div className='m-2 curs' onClick={() => navigation('#about-us')} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .7 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: .8 } }}
              >
                <motion.div className='m-2 curs' whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 5 }}>{t('about-us')}</motion.div>
              </motion.div>
              <motion.div className='m-2 curs' onClick={() => navigation('/specifications')} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .6 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: .6 } }}
              >
                <motion.div className='m-2 curs' whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 5 }}>{t("specifications")}</motion.div>

              </motion.div>
              <motion.div className='m-2 curs' onClick={() => navigation('/')} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: .4 } }}>
                <motion.div className='m-2 curs' whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 5 }}>{t('FAQ`s')}</motion.div>

              </motion.div>

              <motion.button
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="btn btn-light m-2 p-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 7, delay: .05 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: .2 } }}
              >
                <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {lang === 'en'
                    ? <> <img style={{ width: "25px", marginRight: "7px", borderRadius: "2px" }} src="usf.webp" alt="sa" />En </>
                    : <> <img style={{ width: "25px", marginRight: "7px", borderRadius: "2px" }} src="uae.webp" alt="sa" /> Ar </>
                  }
                </button>
                <ul className="dropdown-menu bg-transparent border-0">
                  {supportedLanguages?.map((language, index) => (
                    <li key={index} className="py-0 languageName bg-transparent " id='langDropDown' style={{ cursor: 'pointer' }} onClick={() => changeLanguages(language.slug)}><span className="dropdown-item">{t(language.name)}</span></li>
                  ))}

                </ul>
              </motion.button>
            </motion.div>
          )
        }
      </AnimatePresence>
        </>
    )
}

export default NavBar 