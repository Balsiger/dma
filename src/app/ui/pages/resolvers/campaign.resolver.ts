import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Campaign } from '../../../data/entities/fluid/campaign';
import { FluidCampaignService } from '../../../services/fluid/campaign.service';

export const campaignResolver: ResolveFn<Campaign> = async (route: ActivatedRouteSnapshot) => {
  const service = inject(FluidCampaignService);
  const name = route.paramMap.get('campaign') || '(none)';
  const campaign = await service.get(name);
  return campaign;
};
