import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
        <h1> AboutPage </h1>

        <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
            Get started by editing{' '}
            <code style={{color: 'white'}} className={'code'}>pages/index.js</code>
        </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
