import moment from 'moment';
import {services} from '../../api';
import {pickListService} from '../../api/pickList';
import String from '../../../assets/resources/String';

export const getDetailsFormFields = async item => {
  return [
    {
      name: tr('addAcm.ACMLocation'),
      list: [
        {
          showInfo: false,
          name: tr('addAcm.buildingCode'),
          formControlName: 'Building_Code__c',
          disabled: true,
          props: {
            defaultValue: buildingCode?.toString(),
          },
          type: 'text',
        },
        {
          showInfo: true,
          name: tr('addAcm.roomOfArea'),
          formControlName: 'Room_or_Area__c',
          props: {
            defaultValue: item.Room_or_Area__c?.toString(),
          },
          type: 'text',
          info: tr('addAcm.roomOfAreaInfo'),
          required: true,
        },
        {
          showInfo: true,
          name: tr('addAcm.locationInRoom'),
          formControlName: 'Location_in_Room__c',
          props: {defaultValue: item.Location_in_Room__c?.toString()},
          type: 'text',
          info: tr('addAcm.locationInRoomInfo'),
          required: true,
        },
        {
          showInfo: true,
          name: tr('addAcm.internalOrExternal'),
          formControlName: 'Internal_External__c',
          props: {value: item.Internal_External__c?.toString()},
          type: 'dropdown',
          options: await pickListService.local.getStandardKeyList(
            'Internal_External__c',
          ),
          info: tr('addAcm.internalOrExternalInfo'),
          required: true,
        },
        {
          showInfo: true,
          name: tr('addAcm.level'),
          formControlName: 'Level__c',
          props: {defaultValue: item.Level__c?.toString()},
          type: 'text',
          info: tr('addAcm.levelInfo'),
          required: true,
        },
      ],
    },
  
  ];
};
