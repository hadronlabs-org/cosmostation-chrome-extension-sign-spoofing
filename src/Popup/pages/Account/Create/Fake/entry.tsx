import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { joiResolver } from '@hookform/resolvers/joi';

import Button from '~/Popup/components/common/Button';
import { useCurrentAccount } from '~/Popup/hooks/useCurrent/useCurrentAccount';
import { useLoading } from '~/Popup/hooks/useLoading';
import { useNavigate } from '~/Popup/hooks/useNavigate';
import { useTranslation } from '~/Popup/hooks/useTranslation';
import { disposableLoadingState } from '~/Popup/recoils/loading';

import { BottomContainer, Container, InputContainer, StyledInput48 } from './styled';
import type { FakeForm } from './useSchema';
import { useSchema } from './useSchema';

export type CheckWord = {
  index: number;
  word: string;
};

export default function Entry() {
  const { navigateBack } = useNavigate();

  const { currentAccount, addAccount } = useCurrentAccount();

  const { setLoadingOverlay } = useLoading();

  const { enqueueSnackbar } = useSnackbar();

  const setDisposableLoading = useSetRecoilState(disposableLoadingState);

  const { fakeForm } = useSchema();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FakeForm>({
    resolver: joiResolver(fakeForm),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
  });

  const submit = async (data: FakeForm) => {
    setDisposableLoading(false);
    setLoadingOverlay(true);

    const accountId = uuidv4();

    await addAccount({
      ...currentAccount,
      id: accountId,
      name: data.name,
      address: data.address,
    });

    setLoadingOverlay(false);

    reset();
    enqueueSnackbar('success creating new account');
    navigateBack();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Container>
        <InputContainer>
          <div>
            <StyledInput48
              placeholder={t('pages.Account.Create.Import.Mnemonic.entry.accountNamePlaceholder')}
              inputProps={register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </div>
          <div>
            <StyledInput48 placeholder="Address" inputProps={register('address')} error={!!errors.address} helperText={errors.address?.message} />
          </div>
        </InputContainer>
        <BottomContainer>
          <Button type="submit" disabled={!isDirty}>
            {t('pages.Account.Create.Import.Mnemonic.entry.done')}
          </Button>
        </BottomContainer>
      </Container>
    </form>
  );
}
