import assets from '@assets/index';
import Image from 'next/image';
import { Text } from '@components/atoms/Text';
import RadioButtonUnchecked from '@components/molecules/RadioButtonUnchecked';
import RadioButtonChecked from '@components/molecules/RadioButtonChecked';
import Date from '@components/molecules/Date';
import Video from '@components/molecules/Video';
import Arrow from '@components/molecules/Arrow';
import VariantContainedSizeLargeIconLeftFalseIconRightFalse from '@components/molecules/VariantContainedSizeLargeIconLeftFalseIconRightFalse';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type HomepageProps = DefaultPageProps & {
  className?: string;
};

function Homepage(props: HomepageProps): JSX.Element {
  return (
    <div className={styles.page_container}>
      <div className={styles.hero_section_62}>
        <div className={styles.top_header_21}>
          <div className={styles.top_container_21}>
            <div className={styles.fickleflight_logo_9}>
              <div className={styles.symbols_9}>
                <div className={styles.symbols_9}>
                  <div className={styles.symbols_9}>
                    <Image
                      sourceType="upload"
                      className={styles.image_9}
                      src={assets('1686621805510-png')}
                      alt="Image9"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationright_21}>
              <div className={styles.navigation_menu_15}>
                <Text textType="Text" className={styles.text_12}>
                  {'Explore'}
                </Text>
                <Text textType="Text" className={styles.text_13}>
                  {'Search'}
                </Text>
                <Text textType="Text" className={styles.text_13}>
                  {'Hotels'}
                </Text>
                <Text textType="Text" className={styles.text_13}>
                  {'Offers'}
                </Text>
              </div>
              <div className={styles.accountsection_21}>
                <div className={styles.notificationbell_20}>
                  <Image
                    sourceType="upload"
                    className={styles.image_18}
                    src={assets('1686621805540-svg')}
                    alt="Image18"
                  />
                  <Image
                    sourceType="upload"
                    className={styles.image_19}
                    src={assets('1686621805542-svg')}
                    alt="Image19"
                  />
                  <div className={styles.ellipse_5320} />
                </div>
                <Image
                  sourceType="upload"
                  className={styles.image_21}
                  src={assets('1686621805544-png')}
                  alt="Image21"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.search_section_62}>
          <Image
            sourceType="upload"
            className={styles.image_23}
            src={assets('1686621805569-png')}
            alt="Image23"
          />
          <Image
            sourceType="upload"
            className={styles.image_24}
            src={assets('1686621806021-png')}
            alt="Image24"
          />
          <div className={styles.search_container_62}>
            <div className={styles.title_28}>
              <Text textType="Text" className={styles.text_27}>
                {'Let’s explore & travel the world'}
              </Text>
              <Text textType="Text" className={styles.text_28}>
                {'Find the best destinations and the most popular stays!'}
              </Text>
            </div>
            <div className={styles.search_form_62}>
              <div className={styles.form_title_group_39}>
                <Text textType="Text" className={styles.text_31}>
                  {'Search flights'}
                </Text>
                <div className={styles.flightoptions_39}>
                  <div className={styles.flighttype_39}>
                    <div className={styles.radio_36}>
                      <div className={styles.padding_35}>
                        <RadioButtonUnchecked className={styles.radio_button_unchecked_1} />
                      </div>
                      <Text textType="Text" className={styles.text_36}>
                        {'Return'}
                      </Text>
                    </div>
                    <div className={styles.radio_39}>
                      <div className={styles.padding_35}>
                        <RadioButtonChecked className={styles.radio_button_unchecked_1} />
                      </div>
                      <Text textType="Text" className={styles.text_36}>
                        {'One-way'}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.form_inputs_row_62}>
                <div className={styles.inputs_row_59}>
                  <div className={styles.departure_field_47}>
                    <div className={styles.input_47}>
                      <div className={styles.label_container_45}>
                        <Text textType="Text" className={styles.text_45}>
                          {'Departure'}
                        </Text>
                      </div>
                      <div className={styles.active_47}>
                        <Text textType="Text" className={styles.text_47}>
                          {'Singapore (SIN)'}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className={styles.departure_field_47}>
                    <div className={styles.input_47}>
                      <div className={styles.label_container_51}>
                        <Text textType="Text" className={styles.text_45}>
                          {'Arrival'}
                        </Text>
                      </div>
                      <div className={styles.active_47}>
                        <Text textType="Text" className={styles.text_47}>
                          {'Los Angeles (LA)'}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className={styles.departure_field_47}>
                    <div className={styles.input_47}>
                      <div className={styles.label_container_57}>
                        <Text textType="Text" className={styles.text_45}>
                          {'Date'}
                        </Text>
                      </div>
                      <div className={styles.active_47}>
                        <Text textType="Text" className={styles.text_47}>
                          {'01/05/2022'}
                        </Text>
                        <Date className={styles.date_1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button_group_62}>
                  <div className={styles.search_flights_button_62}>
                    <Text textType="Text" className={styles.text_62}>
                      {'Search flights'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home_contents_268}>
        <div className={styles.upcoming_flight_section_117}>
          <div className={styles.upcoming_flight_section_117}>
            <Text textType="Text" className={styles.text_66}>
              {'Recent Searches'}
            </Text>
            <div className={styles.flight_details_117}>
              <div className={styles.recent_searches_96}>
                <div className={styles.flight_main_container_82}>
                  <div className={styles.toand_from_81}>
                    <div className={styles.from_details_72}>
                      <Text textType="Text" className={styles.text_72}>
                        {'SIN'}
                      </Text>
                    </div>
                    <div className={styles.duration_79}>
                      <div className={styles.flighticons_79}>
                        <div className={styles.line_275} />
                        <div className={styles.ionairplane_77}>
                          <Image
                            sourceType="upload"
                            className={styles.image_77}
                            src={assets('1686621806314-svg')}
                            alt="Image77"
                          />
                        </div>
                        <div className={styles.ellipse_1878} />
                        <div className={styles.ellipse_1979} />
                      </div>
                    </div>
                    <div className={styles.to_details_81}>
                      <Text textType="Text" className={styles.text_81}>
                        {'LAX'}
                      </Text>
                    </div>
                  </div>
                  <Text textType="Text" className={styles.text_82}>
                    {'Depart on: 7 Sep 2021'}
                  </Text>
                </div>
                <div className={styles.flight_main_container_82}>
                  <div className={styles.toand_from_81}>
                    <div className={styles.from_details_72}>
                      <Text textType="Text" className={styles.text_72}>
                        {'MY'}
                      </Text>
                    </div>
                    <div className={styles.duration_79}>
                      <div className={styles.flighticons_79}>
                        <div className={styles.line_275} />
                        <div className={styles.ionairplane_77}>
                          <Image
                            sourceType="upload"
                            className={styles.image_77}
                            src={assets('1686621806322-svg')}
                            alt="Image91"
                          />
                        </div>
                        <div className={styles.ellipse_1878} />
                        <div className={styles.ellipse_1979} />
                      </div>
                    </div>
                    <div className={styles.to_details_81}>
                      <Text textType="Text" className={styles.text_81}>
                        {'DUB'}
                      </Text>
                    </div>
                  </div>
                  <Text textType="Text" className={styles.text_82}>
                    {'Depart on: 9 Sep 2021'}
                  </Text>
                </div>
              </div>
              <div className={styles.prepare_menu_117}>
                <Text textType="Text" className={styles.text_98}>
                  {'Prepare for your trip'}
                </Text>
                <div className={styles.trip_menus_117}>
                  <div className={styles.hotel_102}>
                    <Image
                      sourceType="upload"
                      className={styles.image_101}
                      src={assets('1686621806329-svg')}
                      alt="Image101"
                    />
                    <Text textType="Text" className={styles.text_102}>
                      {'Hotel'}
                    </Text>
                  </div>
                  <div className={styles.attractions_105}>
                    <Image
                      sourceType="upload"
                      className={styles.image_101}
                      src={assets('1686621806331-svg')}
                      alt="Image104"
                    />
                    <Text textType="Text" className={styles.text_105}>
                      {'Attractions'}
                    </Text>
                  </div>
                  <div className={styles.hotel_102}>
                    <Image
                      sourceType="upload"
                      className={styles.image_101}
                      src={assets('1686621806334-svg')}
                      alt="Image107"
                    />
                    <Text textType="Text" className={styles.text_105}>
                      {'Eats'}
                    </Text>
                  </div>
                  <div className={styles.commute_111}>
                    <Image
                      sourceType="upload"
                      className={styles.image_101}
                      src={assets('1686621806337-svg')}
                      alt="Image110"
                    />
                    <Text textType="Text" className={styles.text_105}>
                      {'Commute'}
                    </Text>
                  </div>
                  <div className={styles.commute_111}>
                    <Image
                      sourceType="upload"
                      className={styles.image_113}
                      src={assets('1686621806341-svg')}
                      alt="Image113"
                    />
                    <Text textType="Text" className={styles.text_105}>
                      {'Taxi'}
                    </Text>
                  </div>
                  <div className={styles.hotel_102}>
                    <Image
                      sourceType="upload"
                      className={styles.image_101}
                      src={assets('1686621806343-svg')}
                      alt="Image116"
                    />
                    <Text textType="Text" className={styles.text_105}>
                      {'Movies'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pop_destinations_main_159}>
          <div className={styles.destinations_titles_126}>
            <div className={styles.titlecontainer_122}>
              <Text textType="Text" className={styles.text_121}>
                {'Plan your next trip'}
              </Text>
              <Text textType="Text" className={styles.text_122}>
                {'Most Popular Destinations'}
              </Text>
            </div>
            <div className={styles.viewalltop_126}>
              <Text textType="Text" className={styles.text_124}>
                {'View all destinations'}
              </Text>
              <div className={styles.notificationbell_20}>
                <Image
                  sourceType="upload"
                  className={styles.image_126}
                  src={assets('1686621806350-svg')}
                  alt="Image126"
                />
              </div>
            </div>
          </div>
          <div className={styles.cards_container_159}>
            <div className={styles.col_1135}>
              <div className={styles.paris_card_135}>
                <Image
                  sourceType="upload"
                  className={styles.image_130}
                  src={assets('1686621806353-png')}
                  alt="Image130"
                />
                <div className={styles.destination_details_135}>
                  <Text textType="Text" className={styles.text_132}>
                    {'Paris'}
                  </Text>
                  <div className={styles.details_135}>
                    <Text textType="Text" className={styles.text_134}>
                      {'$699'}
                    </Text>
                    <Text textType="Text" className={styles.text_135}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col_1135}>
              <div className={styles.paris_card_135}>
                <Image
                  sourceType="upload"
                  className={styles.image_130}
                  src={assets('1686621806424-png')}
                  alt="Image138"
                />
                <div className={styles.destination_details_135}>
                  <Text textType="Text" className={styles.text_132}>
                    {'Greece'}
                  </Text>
                  <div className={styles.details_143}>
                    <Text textType="Text" className={styles.text_134}>
                      {'$1079'}
                    </Text>
                    <Text textType="Text" className={styles.text_143}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col_1135}>
              <div className={styles.paris_card_135}>
                <Image
                  sourceType="upload"
                  className={styles.image_130}
                  src={assets('1686621806490-png')}
                  alt="Image146"
                />
                <div className={styles.destination_details_135}>
                  <Text textType="Text" className={styles.text_132}>
                    {'Norway'}
                  </Text>
                  <div className={styles.details_135}>
                    <Text textType="Text" className={styles.text_134}>
                      {'$895'}
                    </Text>
                    <Text textType="Text" className={styles.text_135}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col_1135}>
              <div className={styles.paris_card_135}>
                <Image
                  sourceType="upload"
                  className={styles.image_130}
                  src={assets('1686621806559-png')}
                  alt="Image154"
                />
                <div className={styles.destination_details_135}>
                  <Text textType="Text" className={styles.text_132}>
                    {'Tuscany'}
                  </Text>
                  <div className={styles.details_159}>
                    <Text textType="Text" className={styles.text_134}>
                      {'$1245'}
                    </Text>
                    <Text textType="Text" className={styles.text_159}>
                      {'from'}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.recommended_holidays_container_199}>
          <div className={styles.rectitle_166}>
            <Text textType="Text" className={styles.text_162}>
              {'Recommended Holidays'}
            </Text>
            <div className={styles.frame_701166}>
              <Text textType="Text" className={styles.text_124}>
                {'View all holidays'}
              </Text>
              <div className={styles.notificationbell_20}>
                <Image
                  sourceType="upload"
                  className={styles.image_126}
                  src={assets('1686621806621-svg')}
                  alt="Image166"
                />
              </div>
            </div>
          </div>
          <div className={styles.reccardscontainer_199}>
            <div className={styles.reccard_1175}>
              <Image
                sourceType="upload"
                className={styles.image_169}
                src={assets('1686621806624-png')}
                alt="Image169"
              />
              <div className={styles.holidaydetails_175}>
                <div className={styles.frame_685175}>
                  <div className={styles.frame_684174}>
                    <Text textType="Text" className={styles.text_173}>
                      {'Bali'}
                    </Text>
                    <Text textType="Text" className={styles.text_174}>
                      {'4D3N'}
                    </Text>
                  </div>
                  <Text textType="Text" className={styles.text_175}>
                    {'$899'}
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.reccard_1175}>
              <Image
                sourceType="upload"
                className={styles.image_169}
                src={assets('1686621806703-png')}
                alt="Image177"
              />
              <div className={styles.holidaydetails_175}>
                <div className={styles.frame_685175}>
                  <div className={styles.frame_684182}>
                    <Text textType="Text" className={styles.text_173}>
                      {'Swiss'}
                    </Text>
                    <Text textType="Text" className={styles.text_174}>
                      {'6D5N'}
                    </Text>
                  </div>
                  <Text textType="Text" className={styles.text_175}>
                    {'$900'}
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.reccard_1175}>
              <Image
                sourceType="upload"
                className={styles.image_169}
                src={assets('1686621806779-png')}
                alt="Image185"
              />
              <div className={styles.holidaydetails_175}>
                <div className={styles.frame_685175}>
                  <div className={styles.frame_684174}>
                    <Text textType="Text" className={styles.text_173}>
                      {'Boracay'}
                    </Text>
                    <Text textType="Text" className={styles.text_174}>
                      {'5D4N'}
                    </Text>
                  </div>
                  <Text textType="Text" className={styles.text_175}>
                    {'$699'}
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.reccard_1175}>
              <Image
                sourceType="upload"
                className={styles.image_169}
                src={assets('1686621806872-png')}
                alt="Image193"
              />
              <div className={styles.holidaydetails_175}>
                <div className={styles.frame_685175}>
                  <div className={styles.details_198}>
                    <Text textType="Text" className={styles.text_173}>
                      {'Palawan'}
                    </Text>
                    <Text textType="Text" className={styles.text_174}>
                      {'4D3N'}
                    </Text>
                  </div>
                  <Text textType="Text" className={styles.text_175}>
                    {'$789'}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.popular_stays_268}>
          <div className={styles.popular_stays_header_207}>
            <div className={styles.popular_stays_title_203}>
              <Text textType="Text" className={styles.text_203}>
                {'Popular Stays'}
              </Text>
            </div>
            <div className={styles.viewallstaysbutton_207}>
              <Text textType="Text" className={styles.text_124}>
                {'View all stays'}
              </Text>
              <div className={styles.notificationbell_20}>
                <Image
                  sourceType="upload"
                  className={styles.image_126}
                  src={assets('1686621806944-svg')}
                  alt="Image207"
                />
              </div>
            </div>
          </div>
          <div className={styles.hotel_cards_268}>
            <div className={styles.hotel_card_1223}>
              <div className={styles.hotel_card_223}>
                <Image
                  sourceType="upload"
                  className={styles.image_211}
                  src={assets('1686621806947-png')}
                  alt="Image211"
                />
                <div className={styles.stay_details_216}>
                  <div className={styles.stay_detailsrows_216}>
                    <Text textType="Text" className={styles.text_214}>
                      {'Entire bungalow'}
                    </Text>
                    <Text textType="Text" className={styles.text_215}>
                      {'Matterhorn Suites'}
                    </Text>
                    <Text textType="Text" className={styles.text_216}>
                      {'$575/night'}
                    </Text>
                  </div>
                  <Video className={styles.video_1} />
                </div>
                <div className={styles.rating_221}>
                  <Text textType="Text" className={styles.text_218}>
                    {'(60 reviews)'}
                  </Text>
                  <div className={styles.group_49221}>
                    <Text textType="Text" className={styles.text_220}>
                      {'4.9'}
                    </Text>
                    <Image
                      sourceType="upload"
                      className={styles.image_221}
                      src={assets('1686621807020-svg')}
                      alt="Image221"
                    />
                  </div>
                </div>
                <div className={styles.more_details_button_223}>
                  <Text textType="Text" className={styles.text_223}>
                    {'More details'}
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.hotel_card_1223}>
              <div className={styles.hotel_card_223}>
                <Image
                  sourceType="upload"
                  className={styles.image_211}
                  src={assets('1686621807026-png')}
                  alt="Image226"
                />
                <div className={styles.stay_details_231}>
                  <div className={styles.stay_detailsrows_216}>
                    <Text textType="Text" className={styles.text_214}>
                      {'2-Story beachfront suite'}
                    </Text>
                    <Text textType="Text" className={styles.text_215}>
                      {'Discovery Shores'}
                    </Text>
                    <Text textType="Text" className={styles.text_216}>
                      {'$360/night'}
                    </Text>
                  </div>
                  <Video className={styles.video_1} />
                </div>
                <div className={styles.rating_221}>
                  <Text textType="Text" className={styles.text_233}>
                    {'(116 reviews)'}
                  </Text>
                  <div className={styles.group_49221}>
                    <Text textType="Text" className={styles.text_235}>
                      {'4.8'}
                    </Text>
                    <Image
                      sourceType="upload"
                      className={styles.image_221}
                      src={assets('1686621807091-svg')}
                      alt="Image236"
                    />
                  </div>
                </div>
                <div className={styles.more_details_button_223}>
                  <Text textType="Text" className={styles.text_223}>
                    {'More details'}
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.hotel_card_1223}>
              <div className={styles.hotel_card_223}>
                <Image
                  sourceType="upload"
                  className={styles.image_211}
                  src={assets('1686621807096-png')}
                  alt="Image241"
                />
                <div className={styles.stay_details_246}>
                  <div className={styles.stay_detailsrows_246}>
                    <Text textType="Text" className={styles.text_214}>
                      {'Single deluxe hut'}
                    </Text>
                    <Text textType="Text" className={styles.text_215}>
                      {'Arctic Hut '}
                    </Text>
                    <Text textType="Text" className={styles.text_216}>
                      {'$420/night'}
                    </Text>
                  </div>
                  <Video className={styles.video_1} />
                </div>
                <div className={styles.rating_251}>
                  <Text textType="Text" className={styles.text_248}>
                    {'(78 reviews)'}
                  </Text>
                  <div className={styles.group_49221}>
                    <Text textType="Text" className={styles.text_250}>
                      {'4.7'}
                    </Text>
                    <Image
                      sourceType="upload"
                      className={styles.image_251}
                      src={assets('1686621807176-svg')}
                      alt="Image251"
                    />
                  </div>
                </div>
                <div className={styles.more_details_button_223}>
                  <Text textType="Text" className={styles.text_223}>
                    {'More details'}
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.hotel_card_1223}>
              <div className={styles.hotel_card_223}>
                <Image
                  sourceType="upload"
                  className={styles.image_211}
                  src={assets('1686621807182-png')}
                  alt="Image256"
                />
                <div className={styles.stay_details_216}>
                  <div className={styles.stay_detailsrows_216}>
                    <Text textType="Text" className={styles.text_214}>
                      {'Deluxe King Room'}
                    </Text>
                    <Text textType="Text" className={styles.text_215}>
                      {'Lake Louise Inn'}
                    </Text>
                    <Text textType="Text" className={styles.text_216}>
                      {'$244/night'}
                    </Text>
                  </div>
                  <Video className={styles.video_1} />
                </div>
                <div className={styles.rating_221}>
                  <Text textType="Text" className={styles.text_218}>
                    {'(63 reviews)'}
                  </Text>
                  <div className={styles.group_49221}>
                    <Text textType="Text" className={styles.text_265}>
                      {'4.6'}
                    </Text>
                    <Image
                      sourceType="upload"
                      className={styles.image_221}
                      src={assets('1686621807250-svg')}
                      alt="Image266"
                    />
                  </div>
                </div>
                <div className={styles.more_details_button_268}>
                  <Text textType="Text" className={styles.text_223}>
                    {'More details'}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_section_320}>
        <div className={styles.subscribe_section_288}>
          <Image
            sourceType="upload"
            className={styles.image_271}
            src={assets('1686621807256-png')}
            alt="Image271"
          />
          <div className={styles.shareyourtravelsform_288}>
            <div className={styles.form_header_275}>
              <Text textType="Text" className={styles.text_274}>
                {'subscribe to our newsletter'}
              </Text>
              <Text textType="Text" className={styles.text_275}>
                {'Get weekly updates'}
              </Text>
            </div>
            <div className={styles.form_288}>
              <div className={styles.form_text_278}>
                <Text textType="Text" className={styles.text_278}>
                  {'Fill in your details to join the party!'}
                </Text>
              </div>
              <div className={styles.form_fields_287}>
                <div className={styles.destination_name_input_283}>
                  <div className={styles.input_283}>
                    <div className={styles.inactive_283}>
                      <Text textType="Text" className={styles.text_283}>
                        {'Your name'}
                      </Text>
                      <Arrow className={styles.arrow_1} />
                    </div>
                  </div>
                </div>
                <div className={styles.destination_name_input_283}>
                  <div className={styles.input_283}>
                    <div className={styles.inactive_283}>
                      <Text textType="Text" className={styles.text_283}>
                        {'Email address'}
                      </Text>
                      <Arrow className={styles.arrow_1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.search_flights_button_62}>
                <VariantContainedSizeLargeIconLeftFalseIconRightFalse
                  className={styles.unstyled_button_1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_320}>
          <div className={styles.fickle_flight_bio_300}>
            <div className={styles.fickleflight_logo_9}>
              <Image
                sourceType="upload"
                className={styles.symbols_9}
                src={assets('1686621807404-svg')}
                alt="Image292"
              />
            </div>
            <Text textType="Text" className={styles.text_293}>
              {
                'Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.'
              }
            </Text>
            <div className={styles.social_icons_300}>
              <div className={styles.entyposocialfacebookwithcircle_296}>
                <Image
                  sourceType="upload"
                  className={styles.image_296}
                  src={assets('1686621807407-svg')}
                  alt="Image296"
                />
              </div>
              <div className={styles.entyposocialtwitterwithcircle_298}>
                <Image
                  sourceType="upload"
                  className={styles.image_296}
                  src={assets('1686621807409-svg')}
                  alt="Image298"
                />
              </div>
              <div className={styles.entyposocialinstagramwithcircle_300}>
                <Image
                  sourceType="upload"
                  className={styles.image_296}
                  src={assets('1686621807413-svg')}
                  alt="Image300"
                />
              </div>
            </div>
          </div>
          <div className={styles.line_4301} />
          <div className={styles.footer_links_320}>
            <div className={styles.company_308}>
              <Text textType="Text" className={styles.text_304}>
                {'About Us'}
              </Text>
              <Text textType="Text" className={styles.text_305}>
                {'Company'}
              </Text>
              <Text textType="Text" className={styles.text_306}>
                {'News'}
              </Text>
              <Text textType="Text" className={styles.text_307}>
                {'Careers'}
              </Text>
              <Text textType="Text" className={styles.text_308}>
                {'How we work'}
              </Text>
            </div>
            <div className={styles.company_308}>
              <Text textType="Text" className={styles.text_304}>
                {'Account'}
              </Text>
              <Text textType="Text" className={styles.text_305}>
                {'Support'}
              </Text>
              <Text textType="Text" className={styles.text_306}>
                {'Support Center'}
              </Text>
              <Text textType="Text" className={styles.text_307}>
                {'FAQ'}
              </Text>
              <Text textType="Text" className={styles.text_308}>
                {'Accessibility'}
              </Text>
            </div>
            <div className={styles.company_308}>
              <Text textType="Text" className={styles.text_304}>
                {'Covid Advisory'}
              </Text>
              <Text textType="Text" className={styles.text_305}>
                {'More'}
              </Text>
              <Text textType="Text" className={styles.text_306}>
                {'Airline Fees'}
              </Text>
              <Text textType="Text" className={styles.text_307}>
                {'Tips'}
              </Text>
              <Text textType="Text" className={styles.text_308}>
                {'Quarantine Rules'}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
