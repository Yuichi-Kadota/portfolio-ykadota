import { AppBar } from '../common/appbar';
import { Grid, Stack } from '@mui/material';
import Project from './project';
import { useSiteRef } from '../../../contexts/useSiteRef';

export default function Experience() {
  const siteRef = useSiteRef();
  return (
    <Grid
      container
      columns={12}
      sx={{ background: (theme) => theme.palette.grey[50] }}
    >
      <Grid item xs={12}>
        <AppBar
          title={'Experience'}
          ref={siteRef.ContextRefs.experienceRef}
        ></AppBar>
      </Grid>
      <Grid container justifyContent="center">
        <Stack direction="column">
          <Project
            src={'/contents/experience/project.png'}
            title={'電子書籍流通システム　リライト'}
            position={'Full-Stack Software Developer'}
            doneList={[
              '要件調整',
              'フロントエンド実装',
              'バックエンドAPI実装',
              'インフラアーキテクチャ設計',
              'インフラ構築',
              '監視設計、構築',
              'バッチ設計、構築',
            ]}
            techList={['Next.js', 'Go', 'AWS', 'Terraform']}
            company="MEDIA DO Co., Ltd."
            siteLink="https://mediado.jp/"
            from="2021/05"
          />
          <Project
            src={'/contents/experience/project.png'}
            title={'電子書籍流通システム　AWS移行'}
            position={'Backend Software Developer'}
            doneList={[
              '移行課題検討',
              '認証基盤/API構築',
              'インフラアーキテクチャ設計',
              'インフラ構築',
              '移行用スクリプト構築',
              'PHP バージョンアップデート(4.4 > 7.3)',
            ]}
            techList={['Go', 'PHP', 'AWS', 'Terraform']}
            company="MEDIA DO Co., Ltd."
            siteLink="https://mediado.jp/"
            from="2020/06"
            to="2021/05"
          />
          <Project
            src={'/contents/experience/engineer.png'}
            title={'金融案件横断PoC案件'}
            position={'Full-Stack Software Developer'}
            doneList={[
              '社内プライベートクラウド運用/保守',
              'APIコンテナ基盤PoC',
              'ブロックチェーンアプリPoC',
              '業界ニュースレコメンドアプリPoC',
            ]}
            techList={[
              'Vue.js',
              'Node.js',
              'Azure',
              'k8s',
              'istio',
              'solidity',
            ]}
            company="Mizuho Research & Technologies, Ltd."
            siteLink="https://www.mizuho-ir.co.jp/index.html"
            from="2019/06"
            to="2020/05"
          />
          <Project
            src={'/contents/experience/engineer.png'}
            title={'決済基盤CIパイプライン構築'}
            position={'Dev Ops Developer'}
            doneList={[
              'E2Eシナリオ検討、実行基盤',
              'E2Eテスト実行パイプライン設計、構築',
            ]}
            techList={['Jenkins', 'Serenium', 'RHEL', 'Windows Server']}
            company="Mizuho Research & Technologies, Ltd."
            siteLink="https://www.mizuho-ir.co.jp/index.html"
            from="2018/09"
            to="2019/05"
          />
          <Project
            src={'/contents/experience/engineer.png'}
            title={'勘定系システム移行'}
            position={'System Integrator'}
            doneList={['要件調整', '進捗管理', 'テスト']}
            techList={['COBOL', 'z/os', 'JCL']}
            company="Mizuho Research & Technologies, Ltd."
            siteLink="https://www.mizuho-ir.co.jp/index.html"
            from="2017/04"
            to="2018/08"
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
