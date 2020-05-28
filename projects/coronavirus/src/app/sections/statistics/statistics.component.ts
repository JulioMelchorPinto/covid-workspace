import { Component, OnInit,OnDestroy } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Countries } from '../../shared/models/countries';
import { Global } from '../../shared/models/global';
import { LastData } from '../../shared/models/last-data';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit,OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  public allCountryData = [
    {
      Country: 'Cambodia',
      Slug: 'cambodia',
      ISO2: 'KH',
    },
    {
      Country: 'French Southern Territories',
      Slug: 'french-southern-territories',
      ISO2: 'TF',
    },
    {
      Country: 'Senegal',
      Slug: 'senegal',
      ISO2: 'SN',
    },
    {
      Country: 'Cuba',
      Slug: 'cuba',
      ISO2: 'CU',
    },
    {
      Country: 'Jordan',
      Slug: 'jordan',
      ISO2: 'JO',
    },
    {
      Country: 'Norfolk Island',
      Slug: 'norfolk-island',
      ISO2: 'NF',
    },
    {
      Country: 'Paraguay',
      Slug: 'paraguay',
      ISO2: 'PY',
    },
    {
      Country: 'Botswana',
      Slug: 'botswana',
      ISO2: 'BW',
    },
    {
      Country: 'Italy',
      Slug: 'italy',
      ISO2: 'IT',
    },
    {
      Country: 'Micronesia, Federated States of',
      Slug: 'micronesia',
      ISO2: 'FM',
    },
    {
      Country: 'Montserrat',
      Slug: 'montserrat',
      ISO2: 'MS',
    },
    {
      Country: 'Tunisia',
      Slug: 'tunisia',
      ISO2: 'TN',
    },
    {
      Country: 'United States of America',
      Slug: 'united-states',
      ISO2: 'US',
    },
    {
      Country: 'American Samoa',
      Slug: 'american-samoa',
      ISO2: 'AS',
    },
    {
      Country: 'Christmas Island',
      Slug: 'christmas-island',
      ISO2: 'CX',
    },
    {
      Country: 'Estonia',
      Slug: 'estonia',
      ISO2: 'EE',
    },
    {
      Country: 'Singapore',
      Slug: 'singapore',
      ISO2: 'SG',
    },
    {
      Country: 'Barbados',
      Slug: 'barbados',
      ISO2: 'BB',
    },
    {
      Country: 'Dominica',
      Slug: 'dominica',
      ISO2: 'DM',
    },
    {
      Country: 'Belize',
      Slug: 'belize',
      ISO2: 'BZ',
    },
    {
      Country: 'Bouvet Island',
      Slug: 'bouvet-island',
      ISO2: 'BV',
    },
    {
      Country: 'Andorra',
      Slug: 'andorra',
      ISO2: 'AD',
    },
    {
      Country: 'Guatemala',
      Slug: 'guatemala',
      ISO2: 'GT',
    },
    {
      Country: 'Marshall Islands',
      Slug: 'marshall-islands',
      ISO2: 'MH',
    },
    {
      Country: 'Palestinian Territory',
      Slug: 'palestine',
      ISO2: 'PS',
    },
    {
      Country: 'Papua New Guinea',
      Slug: 'papua-new-guinea',
      ISO2: 'PG',
    },
    {
      Country: 'Angola',
      Slug: 'angola',
      ISO2: 'AO',
    },
    {
      Country: 'Bahamas',
      Slug: 'bahamas',
      ISO2: 'BS',
    },
    {
      Country: 'El Salvador',
      Slug: 'el-salvador',
      ISO2: 'SV',
    },
    {
      Country: 'Eritrea',
      Slug: 'eritrea',
      ISO2: 'ER',
    },
    {
      Country: 'Uruguay',
      Slug: 'uruguay',
      ISO2: 'UY',
    },
    {
      Country: 'Armenia',
      Slug: 'armenia',
      ISO2: 'AM',
    },
    {
      Country: 'Isle of Man',
      Slug: 'isle-of-man',
      ISO2: 'IM',
    },
    {
      Country: 'Sierra Leone',
      Slug: 'sierra-leone',
      ISO2: 'SL',
    },
    {
      Country: 'Jamaica',
      Slug: 'jamaica',
      ISO2: 'JM',
    },
    {
      Country: 'Poland',
      Slug: 'poland',
      ISO2: 'PL',
    },
    {
      Country: 'Russian Federation',
      Slug: 'russia',
      ISO2: 'RU',
    },
    {
      Country: 'United Arab Emirates',
      Slug: 'united-arab-emirates',
      ISO2: 'AE',
    },
    {
      Country: 'Timor-Leste',
      Slug: 'timor-leste',
      ISO2: 'TL',
    },
    {
      Country: 'Turkmenistan',
      Slug: 'turkmenistan',
      ISO2: 'TM',
    },
    {
      Country: 'Kuwait',
      Slug: 'kuwait',
      ISO2: 'KW',
    },
    {
      Country: 'Saint Vincent and Grenadines',
      Slug: 'saint-vincent-and-the-grenadines',
      ISO2: 'VC',
    },
    {
      Country: 'Saudi Arabia',
      Slug: 'saudi-arabia',
      ISO2: 'SA',
    },
    {
      Country: 'Austria',
      Slug: 'austria',
      ISO2: 'AT',
    },
    {
      Country: 'Bolivia',
      Slug: 'bolivia',
      ISO2: 'BO',
    },
    {
      Country: 'Ecuador',
      Slug: 'ecuador',
      ISO2: 'EC',
    },
    {
      Country: 'Jersey',
      Slug: 'jersey',
      ISO2: 'JE',
    },
    {
      Country: 'Madagascar',
      Slug: 'madagascar',
      ISO2: 'MG',
    },
    {
      Country: 'Netherlands Antilles',
      Slug: 'netherlands-antilles',
      ISO2: 'AN',
    },
    {
      Country: 'Palau',
      Slug: 'palau',
      ISO2: 'PW',
    },
    {
      Country: 'China',
      Slug: 'china',
      ISO2: 'CN',
    },
    {
      Country: 'Tokelau',
      Slug: 'tokelau',
      ISO2: 'TK',
    },
    {
      Country: 'Peru',
      Slug: 'peru',
      ISO2: 'PE',
    },
    {
      Country: 'Sri Lanka',
      Slug: 'sri-lanka',
      ISO2: 'LK',
    },
    {
      Country: 'Cyprus',
      Slug: 'cyprus',
      ISO2: 'CY',
    },
    {
      Country: 'Denmark',
      Slug: 'denmark',
      ISO2: 'DK',
    },
    {
      Country: 'Ghana',
      Slug: 'ghana',
      ISO2: 'GH',
    },
    {
      Country: 'Ireland',
      Slug: 'ireland',
      ISO2: 'IE',
    },
    {
      Country: 'Sweden',
      Slug: 'sweden',
      ISO2: 'SE',
    },
    {
      Country: 'Venezuela (Bolivarian Republic)',
      Slug: 'venezuela',
      ISO2: 'VE',
    },
    {
      Country: 'Guinea-Bissau',
      Slug: 'guinea-bissau',
      ISO2: 'GW',
    },
    {
      Country: 'Liechtenstein',
      Slug: 'liechtenstein',
      ISO2: 'LI',
    },
    {
      Country: 'Norway',
      Slug: 'norway',
      ISO2: 'NO',
    },
    {
      Country: 'Svalbard and Jan Mayen Islands',
      Slug: 'svalbard-and-jan-mayen-islands',
      ISO2: 'SJ',
    },
    {
      Country: 'French Polynesia',
      Slug: 'french-polynesia',
      ISO2: 'PF',
    },
    {
      Country: 'Guadeloupe',
      Slug: 'guadeloupe',
      ISO2: 'GP',
    },
    {
      Country: 'Heard and Mcdonald Islands',
      Slug: 'heard-and-mcdonald-islands',
      ISO2: 'HM',
    },
    {
      Country: 'Honduras',
      Slug: 'honduras',
      ISO2: 'HN',
    },
    {
      Country: 'Mozambique',
      Slug: 'mozambique',
      ISO2: 'MZ',
    },
    {
      Country: 'Argentina',
      Slug: 'argentina',
      ISO2: 'AR',
    },
    {
      Country: 'Gabon',
      Slug: 'gabon',
      ISO2: 'GA',
    },
    {
      Country: 'Thailand',
      Slug: 'thailand',
      ISO2: 'TH',
    },
    {
      Country: 'Chad',
      Slug: 'chad',
      ISO2: 'TD',
    },
    {
      Country: 'Panama',
      Slug: 'panama',
      ISO2: 'PA',
    },
    {
      Country: 'Tonga',
      Slug: 'tonga',
      ISO2: 'TO',
    },
    {
      Country: 'United Kingdom',
      Slug: 'united-kingdom',
      ISO2: 'GB',
    },
    {
      Country: 'Malta',
      Slug: 'malta',
      ISO2: 'MT',
    },
    {
      Country: 'Mauritania',
      Slug: 'mauritania',
      ISO2: 'MR',
    },
    {
      Country: 'New Caledonia',
      Slug: 'new-caledonia',
      ISO2: 'NC',
    },
    {
      Country: 'Central African Republic',
      Slug: 'central-african-republic',
      ISO2: 'CF',
    },
    {
      Country: 'Congo (Kinshasa)',
      Slug: 'congo-kinshasa',
      ISO2: 'CD',
    },
    {
      Country: 'Kazakhstan',
      Slug: 'kazakhstan',
      ISO2: 'KZ',
    },
    {
      Country: 'Liberia',
      Slug: 'liberia',
      ISO2: 'LR',
    },
    {
      Country: 'Mali',
      Slug: 'mali',
      ISO2: 'ML',
    },
    {
      Country: 'Bahrain',
      Slug: 'bahrain',
      ISO2: 'BH',
    },
    {
      Country: 'Cook Islands',
      Slug: 'cook-islands',
      ISO2: 'CK',
    },
    {
      Country: 'Lao PDR',
      Slug: 'lao-pdr',
      ISO2: 'LA',
    },
    {
      Country: 'Samoa',
      Slug: 'samoa',
      ISO2: 'WS',
    },
    {
      Country: 'Belarus',
      Slug: 'belarus',
      ISO2: 'BY',
    },
    {
      Country: 'Solomon Islands',
      Slug: 'solomon-islands',
      ISO2: 'SB',
    },
    {
      Country: 'South Africa',
      Slug: 'south-africa',
      ISO2: 'ZA',
    },
    {
      Country: 'Taiwan, Republic of China',
      Slug: 'taiwan',
      ISO2: 'TW',
    },
    {
      Country: 'Afghanistan',
      Slug: 'afghanistan',
      ISO2: 'AF',
    },
    {
      Country: 'Bulgaria',
      Slug: 'bulgaria',
      ISO2: 'BG',
    },
    {
      Country: 'Georgia',
      Slug: 'georgia',
      ISO2: 'GE',
    },
    {
      Country: 'Saint Pierre and Miquelon',
      Slug: 'saint-pierre-and-miquelon',
      ISO2: 'PM',
    },
    {
      Country: 'Falkland Islands (Malvinas)',
      Slug: 'falkland-islands-malvinas',
      ISO2: 'FK',
    },
    {
      Country: 'Kiribati',
      Slug: 'kiribati',
      ISO2: 'KI',
    },
    {
      Country: 'Macao, SAR China',
      Slug: 'macao-sar-china',
      ISO2: 'MO',
    },
    {
      Country: 'Mayotte',
      Slug: 'mayotte',
      ISO2: 'YT',
    },
    {
      Country: 'Greenland',
      Slug: 'greenland',
      ISO2: 'GL',
    },
    {
      Country: 'Guam',
      Slug: 'guam',
      ISO2: 'GU',
    },
    {
      Country: 'Maldives',
      Slug: 'maldives',
      ISO2: 'MV',
    },
    {
      Country: 'Anguilla',
      Slug: 'anguilla',
      ISO2: 'AI',
    },
    {
      Country: 'Serbia',
      Slug: 'serbia',
      ISO2: 'RS',
    },
    {
      Country: 'Republic of Kosovo',
      Slug: 'kosovo',
      ISO2: 'XK',
    },
    {
      Country: 'Nepal',
      Slug: 'nepal',
      ISO2: 'NP',
    },
    {
      Country: 'Oman',
      Slug: 'oman',
      ISO2: 'OM',
    },
    {
      Country: 'Saint-Barthélemy',
      Slug: 'saint-barthélemy',
      ISO2: 'BL',
    },
    {
      Country: 'Aruba',
      Slug: 'aruba',
      ISO2: 'AW',
    },
    {
      Country: 'Iraq',
      Slug: 'iraq',
      ISO2: 'IQ',
    },
    {
      Country: 'Lebanon',
      Slug: 'lebanon',
      ISO2: 'LB',
    },
    {
      Country: 'Seychelles',
      Slug: 'seychelles',
      ISO2: 'SC',
    },
    {
      Country: 'Tuvalu',
      Slug: 'tuvalu',
      ISO2: 'TV',
    },
    {
      Country: 'Cayman Islands',
      Slug: 'cayman-islands',
      ISO2: 'KY',
    },
    {
      Country: 'Israel',
      Slug: 'israel',
      ISO2: 'IL',
    },
    {
      Country: 'Nauru',
      Slug: 'nauru',
      ISO2: 'NR',
    },
    {
      Country: 'South Georgia and the South Sandwich Islands',
      Slug: 'south-georgia-and-the-south-sandwich-islands',
      ISO2: 'GS',
    },
    {
      Country: 'Yemen',
      Slug: 'yemen',
      ISO2: 'YE',
    },
    {
      Country: 'Brazil',
      Slug: 'brazil',
      ISO2: 'BR',
    },
    {
      Country: 'Brunei Darussalam',
      Slug: 'brunei',
      ISO2: 'BN',
    },
    {
      Country: 'Bhutan',
      Slug: 'bhutan',
      ISO2: 'BT',
    },
    {
      Country: 'Canada',
      Slug: 'canada',
      ISO2: 'CA',
    },
    {
      Country: 'Nigeria',
      Slug: 'nigeria',
      ISO2: 'NG',
    },
    {
      Country: 'Saint Kitts and Nevis',
      Slug: 'saint-kitts-and-nevis',
      ISO2: 'KN',
    },
    {
      Country: 'Bermuda',
      Slug: 'bermuda',
      ISO2: 'BM',
    },
    {
      Country: 'Gambia',
      Slug: 'gambia',
      ISO2: 'GM',
    },
    {
      Country: 'Holy See (Vatican City State)',
      Slug: 'holy-see-vatican-city-state',
      ISO2: 'VA',
    },
    {
      Country: 'Hungary',
      Slug: 'hungary',
      ISO2: 'HU',
    },
    {
      Country: 'Namibia',
      Slug: 'namibia',
      ISO2: 'NA',
    },
    {
      Country: 'Nicaragua',
      Slug: 'nicaragua',
      ISO2: 'NI',
    },
    {
      Country: 'Qatar',
      Slug: 'qatar',
      ISO2: 'QA',
    },
    {
      Country: 'Cocos (Keeling) Islands',
      Slug: 'cocos-keeling-islands',
      ISO2: 'CC',
    },
    {
      Country: 'Korea (North)',
      Slug: 'korea-north',
      ISO2: 'KP',
    },
    {
      Country: 'Korea (South)',
      Slug: 'korea-south',
      ISO2: 'KR',
    },
    {
      Country: 'Vanuatu',
      Slug: 'vanuatu',
      ISO2: 'VU',
    },
    {
      Country: 'Congo (Brazzaville)',
      Slug: 'congo-brazzaville',
      ISO2: 'CG',
    },
    {
      Country: 'French Guiana',
      Slug: 'french-guiana',
      ISO2: 'GF',
    },
    {
      Country: 'Guyana',
      Slug: 'guyana',
      ISO2: 'GY',
    },
    {
      Country: 'France',
      Slug: 'france',
      ISO2: 'FR',
    },
    {
      Country: 'Lesotho',
      Slug: 'lesotho',
      ISO2: 'LS',
    },
    {
      Country: 'South Sudan',
      Slug: 'south-sudan',
      ISO2: 'SS',
    },
    {
      Country: 'US Minor Outlying Islands',
      Slug: 'us-minor-outlying-islands',
      ISO2: 'UM',
    },
    {
      Country: 'Albania',
      Slug: 'albania',
      ISO2: 'AL',
    },
    {
      Country: 'Comoros',
      Slug: 'comoros',
      ISO2: 'KM',
    },
    {
      Country: 'Martinique',
      Slug: 'martinique',
      ISO2: 'MQ',
    },
    {
      Country: 'Saint Lucia',
      Slug: 'saint-lucia',
      ISO2: 'LC',
    },
    {
      Country: 'British Indian Ocean Territory',
      Slug: 'british-indian-ocean-territory',
      ISO2: 'IO',
    },
    {
      Country: 'Burkina Faso',
      Slug: 'burkina-faso',
      ISO2: 'BF',
    },
    {
      Country: 'Somalia',
      Slug: 'somalia',
      ISO2: 'SO',
    },
    {
      Country: 'Wallis and Futuna Islands',
      Slug: 'wallis-and-futuna-islands',
      ISO2: 'WF',
    },
    {
      Country: 'ALA Aland Islands',
      Slug: 'ala-aland-islands',
      ISO2: 'AX',
    },
    {
      Country: 'Niue',
      Slug: 'niue',
      ISO2: 'NU',
    },
    {
      Country: 'Northern Mariana Islands',
      Slug: 'northern-mariana-islands',
      ISO2: 'MP',
    },
    {
      Country: 'Croatia',
      Slug: 'croatia',
      ISO2: 'HR',
    },
    {
      Country: 'Puerto Rico',
      Slug: 'puerto-rico',
      ISO2: 'PR',
    },
    {
      Country: 'Zimbabwe',
      Slug: 'zimbabwe',
      ISO2: 'ZW',
    },
    {
      Country: 'Iran, Islamic Republic of',
      Slug: 'iran',
      ISO2: 'IR',
    },
    {
      Country: 'Romania',
      Slug: 'romania',
      ISO2: 'RO',
    },
    {
      Country: 'Western Sahara',
      Slug: 'western-sahara',
      ISO2: 'EH',
    },
    {
      Country: 'Portugal',
      Slug: 'portugal',
      ISO2: 'PT',
    },
    {
      Country: 'Algeria',
      Slug: 'algeria',
      ISO2: 'DZ',
    },
    {
      Country: 'Burundi',
      Slug: 'burundi',
      ISO2: 'BI',
    },
    {
      Country: 'Dominican Republic',
      Slug: 'dominican-republic',
      ISO2: 'DO',
    },
    {
      Country: 'Grenada',
      Slug: 'grenada',
      ISO2: 'GD',
    },
    {
      Country: 'Mauritius',
      Slug: 'mauritius',
      ISO2: 'MU',
    },
    {
      Country: 'Australia',
      Slug: 'australia',
      ISO2: 'AU',
    },
    {
      Country: 'Bangladesh',
      Slug: 'bangladesh',
      ISO2: 'BD',
    },
    {
      Country: "Côte d'Ivoire",
      Slug: 'cote-divoire',
      ISO2: 'CI',
    },
    {
      Country: 'Gibraltar',
      Slug: 'gibraltar',
      ISO2: 'GI',
    },
    {
      Country: 'Luxembourg',
      Slug: 'luxembourg',
      ISO2: 'LU',
    },
    {
      Country: 'Colombia',
      Slug: 'colombia',
      ISO2: 'CO',
    },
    {
      Country: 'Kenya',
      Slug: 'kenya',
      ISO2: 'KE',
    },
    {
      Country: 'Saint-Martin (French part)',
      Slug: 'saint-martin-french-part',
      ISO2: 'MF',
    },
    {
      Country: 'Tajikistan',
      Slug: 'tajikistan',
      ISO2: 'TJ',
    },
    {
      Country: 'Iceland',
      Slug: 'iceland',
      ISO2: 'IS',
    },
    {
      Country: 'Morocco',
      Slug: 'morocco',
      ISO2: 'MA',
    },
    {
      Country: 'Macedonia, Republic of',
      Slug: 'macedonia',
      ISO2: 'MK',
    },
    {
      Country: 'Philippines',
      Slug: 'philippines',
      ISO2: 'PH',
    },
    {
      Country: 'Sudan',
      Slug: 'sudan',
      ISO2: 'SD',
    },
    {
      Country: 'Ethiopia',
      Slug: 'ethiopia',
      ISO2: 'ET',
    },
    {
      Country: 'Finland',
      Slug: 'finland',
      ISO2: 'FI',
    },
    {
      Country: 'Germany',
      Slug: 'germany',
      ISO2: 'DE',
    },
    {
      Country: 'Turkey',
      Slug: 'turkey',
      ISO2: 'TR',
    },
    {
      Country: 'Mexico',
      Slug: 'mexico',
      ISO2: 'MX',
    },
    {
      Country: 'New Zealand',
      Slug: 'new-zealand',
      ISO2: 'NZ',
    },
    {
      Country: 'Costa Rica',
      Slug: 'costa-rica',
      ISO2: 'CR',
    },
    {
      Country: 'Fiji',
      Slug: 'fiji',
      ISO2: 'FJ',
    },
    {
      Country: 'Guinea',
      Slug: 'guinea',
      ISO2: 'GN',
    },
    {
      Country: 'Hong Kong, SAR China',
      Slug: 'hong-kong-sar-china',
      ISO2: 'HK',
    },
    {
      Country: 'Azerbaijan',
      Slug: 'azerbaijan',
      ISO2: 'AZ',
    },
    {
      Country: 'Switzerland',
      Slug: 'switzerland',
      ISO2: 'CH',
    },
    {
      Country: 'Trinidad and Tobago',
      Slug: 'trinidad-and-tobago',
      ISO2: 'TT',
    },
    {
      Country: 'Belgium',
      Slug: 'belgium',
      ISO2: 'BE',
    },
    {
      Country: 'Bosnia and Herzegovina',
      Slug: 'bosnia-and-herzegovina',
      ISO2: 'BA',
    },
    {
      Country: 'Kyrgyzstan',
      Slug: 'kyrgyzstan',
      ISO2: 'KG',
    },
    {
      Country: 'Spain',
      Slug: 'spain',
      ISO2: 'ES',
    },
    {
      Country: 'Benin',
      Slug: 'benin',
      ISO2: 'BJ',
    },
    {
      Country: 'Guernsey',
      Slug: 'guernsey',
      ISO2: 'GG',
    },
    {
      Country: 'Sao Tome and Principe',
      Slug: 'sao-tome-and-principe',
      ISO2: 'ST',
    },
    {
      Country: 'Suriname',
      Slug: 'suriname',
      ISO2: 'SR',
    },
    {
      Country: 'Latvia',
      Slug: 'latvia',
      ISO2: 'LV',
    },
    {
      Country: 'Monaco',
      Slug: 'monaco',
      ISO2: 'MC',
    },
    {
      Country: 'Pitcairn',
      Slug: 'pitcairn',
      ISO2: 'PN',
    },
    {
      Country: 'Réunion',
      Slug: 'réunion',
      ISO2: 'RE',
    },
    {
      Country: 'Montenegro',
      Slug: 'montenegro',
      ISO2: 'ME',
    },
    {
      Country: 'British Virgin Islands',
      Slug: 'british-virgin-islands',
      ISO2: 'VG',
    },
    {
      Country: 'Cape Verde',
      Slug: 'cape-verde',
      ISO2: 'CV',
    },
    {
      Country: 'Czech Republic',
      Slug: 'czech-republic',
      ISO2: 'CZ',
    },
    {
      Country: 'Equatorial Guinea',
      Slug: 'equatorial-guinea',
      ISO2: 'GQ',
    },
    {
      Country: 'Antarctica',
      Slug: 'antarctica',
      ISO2: 'AQ',
    },
    {
      Country: 'Syrian Arab Republic (Syria)',
      Slug: 'syria',
      ISO2: 'SY',
    },
    {
      Country: 'Ukraine',
      Slug: 'ukraine',
      ISO2: 'UA',
    },
    {
      Country: 'Djibouti',
      Slug: 'djibouti',
      ISO2: 'DJ',
    },
    {
      Country: 'Faroe Islands',
      Slug: 'faroe-islands',
      ISO2: 'FO',
    },
    {
      Country: 'Libya',
      Slug: 'libya',
      ISO2: 'LY',
    },
    {
      Country: 'Mongolia',
      Slug: 'mongolia',
      ISO2: 'MN',
    },
    {
      Country: 'Slovakia',
      Slug: 'slovakia',
      ISO2: 'SK',
    },
    {
      Country: 'Tanzania, United Republic of',
      Slug: 'tanzania',
      ISO2: 'TZ',
    },
    {
      Country: 'Uganda',
      Slug: 'uganda',
      ISO2: 'UG',
    },
    {
      Country: 'Chile',
      Slug: 'chile',
      ISO2: 'CL',
    },
    {
      Country: 'Egypt',
      Slug: 'egypt',
      ISO2: 'EG',
    },
    {
      Country: 'India',
      Slug: 'india',
      ISO2: 'IN',
    },
    {
      Country: 'San Marino',
      Slug: 'san-marino',
      ISO2: 'SM',
    },
    {
      Country: 'Uzbekistan',
      Slug: 'uzbekistan',
      ISO2: 'UZ',
    },
    {
      Country: 'Cameroon',
      Slug: 'cameroon',
      ISO2: 'CM',
    },
    {
      Country: 'Malawi',
      Slug: 'malawi',
      ISO2: 'MW',
    },
    {
      Country: 'Malaysia',
      Slug: 'malaysia',
      ISO2: 'MY',
    },
    {
      Country: 'Moldova',
      Slug: 'moldova',
      ISO2: 'MD',
    },
    {
      Country: 'Saint Helena',
      Slug: 'saint-helena',
      ISO2: 'SH',
    },
    {
      Country: 'Japan',
      Slug: 'japan',
      ISO2: 'JP',
    },
    {
      Country: 'Slovenia',
      Slug: 'slovenia',
      ISO2: 'SI',
    },
    {
      Country: 'Virgin Islands, US',
      Slug: 'virgin-islands',
      ISO2: 'VI',
    },
    {
      Country: 'Haiti',
      Slug: 'haiti',
      ISO2: 'HT',
    },
    {
      Country: 'Lithuania',
      Slug: 'lithuania',
      ISO2: 'LT',
    },
    {
      Country: 'Rwanda',
      Slug: 'rwanda',
      ISO2: 'RW',
    },
    {
      Country: 'Togo',
      Slug: 'togo',
      ISO2: 'TG',
    },
    {
      Country: 'Greece',
      Slug: 'greece',
      ISO2: 'GR',
    },
    {
      Country: 'Niger',
      Slug: 'niger',
      ISO2: 'NE',
    },
    {
      Country: 'Turks and Caicos Islands',
      Slug: 'turks-and-caicos-islands',
      ISO2: 'TC',
    },
    {
      Country: 'Viet Nam',
      Slug: 'vietnam',
      ISO2: 'VN',
    },
    {
      Country: 'Antigua and Barbuda',
      Slug: 'antigua-and-barbuda',
      ISO2: 'AG',
    },
    {
      Country: 'Myanmar',
      Slug: 'myanmar',
      ISO2: 'MM',
    },
    {
      Country: 'Netherlands',
      Slug: 'netherlands',
      ISO2: 'NL',
    },
    {
      Country: 'Swaziland',
      Slug: 'swaziland',
      ISO2: 'SZ',
    },
    {
      Country: 'Indonesia',
      Slug: 'indonesia',
      ISO2: 'ID',
    },
    {
      Country: 'Pakistan',
      Slug: 'pakistan',
      ISO2: 'PK',
    },
    {
      Country: 'Zambia',
      Slug: 'zambia',
      ISO2: 'ZM',
    },
  ];
  selectedCountry: string = 'mexico';
  countryList: any;

  global: Global;
  countries: Countries[];
  countryIndex: number;
  summary: any;
  public country: Countries;

  constructor(private apiService: ApiService,private fb: FormBuilder) {}

  ngOnInit() {
    this.apiService
      .getSummary()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.summary = data;
      });
      //this.country=this.onChangeSelect(this.selectedCountry);
      console.log(this.country)
  }

  eventSelection(event){
    this.selectedCountry = event.slug;
   }
  onChangeSelect(selectC:string): Countries {
      return this.countries.find(x=>x.slug==selectC);
  }
  getCountries(): any {
    this.countryList;
    return this.apiService
      .getCountries()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.countryList = data;
      });
  }



  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  chartOptions = {
    responsive: true,
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' },
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }
}
