import React, { FC } from 'react'
import { IIsMobile } from '../../../interfaces'
import { Data } from '../../../translations/PT-Translations'
import { Title } from '../../aboutCard/Card.styles'
import PingIcon from '../../../assets/icons/cardsIcons/PingIcon'
import CardIcon from '../../../assets/icons/cardsIcons/CardIcon'
import FolderIcon from '../../../assets/icons/cardsIcons/FolderIcon'
import PapperIcon from '../../../assets/icons/cardsIcons/PaperIcon'
import MetricIcon from '../../../assets/icons/cardsIcons/metricIcon'
import GraphicsIcon from '../../../assets/icons/cardsIcons/GraphicsIcon'
import BookIcon from '../../../assets/icons/cardsIcons/BookIcon'
import PencilIcon from '../../../assets/icons/cardsIcons/PencilIcon'

export const Grid: FC<IIsMobile> = ({ lang, isMobile }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-2 px-8 md:grid-cols-3 lg:grid-col-4 sm:grid-col-1 gap-3 md:px-2 lg:px-40  ">
      <div className="grid gap-4">
        {/* inicio */}
        <div className="my-2 ">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-4  flex items-center">
                <PingIcon />
              </div>
              <Title>{Data[lang].cardsZone.card1.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div className="p-2">
                  <ul>
                    {Data[lang].cardsZone.card1.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* fin */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">
                <CardIcon />
              </div>
              <Title>{Data[lang].cardsZone.card2.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div className="p-2">
                  <ul>
                    {Data[lang].cardsZone.card2.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* fin⁄ */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">icon</div>
              <Title>{Data[lang].cardsZone.card3.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div>
                  <ul>
                    {Data[lang].cardsZone.card3.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        {/* inicio */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">
                <FolderIcon />
              </div>
              <Title>{Data[lang].cardsZone.card4.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div>
                  <ul>
                    {Data[lang].cardsZone.card4.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* fin */}
        {/* inicio */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">
                <PapperIcon />
              </div>
              <Title>{Data[lang].cardsZone.card5.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div>
                  <ul>
                    {Data[lang].cardsZone.card5.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* fin */}
        {/* inicio */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">
                <MetricIcon />
              </div>
              <Title>{Data[lang].cardsZone.card6.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div>
                  <ul>
                    {Data[lang].cardsZone.card6.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* fin */}
      </div>
      <div className="grid gap-4">
        {/* inicio */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">
                <GraphicsIcon />
              </div>
              <Title>{Data[lang].cardsZone.card7.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div>
                  <ul>
                    {Data[lang].cardsZone.card7.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* fin */}
        {/* inicio */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">
                <BookIcon />
              </div>
              <Title>{Data[lang].cardsZone.card8.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div>
                  <ul>
                    {Data[lang].cardsZone.card8.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* fin */}
        {/* inicio */}
        <div className="my-2">
          <div className="shadow-md rounded-md bg-white  h-full">
            <div className="flex m-2">
              <div className="px-2  flex items-center">icon</div>
              <Title>{Data[lang].cardsZone.card9.title}</Title>
            </div>
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #ccc',
                    width: '95%',
                  }}
                />
                <div>
                  <ul>
                    {Data[lang].cardsZone.card9.content.map((li: any) => (
                      <li className="px-4">{li}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* fin */}
      </div>
      {/* inicio */}
      <div className="my-2">
        <div className="shadow-md rounded-md bg-white  h-full">
          <div className="flex m-2">
            <div className="px-2  flex items-center">
              <PencilIcon />
            </div>
            <Title>{Data[lang].cardsZone.card10.title}</Title>
          </div>
          {!isMobile ? (
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #ccc',
                  width: '95%',
                }}
              />
              <div>
                <ul>
                  {Data[lang].cardsZone.card10.content.map((li: any) => (
                    <li className="px-4">{li}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </div>
      {/* fin */}
    </div>
  )
}
