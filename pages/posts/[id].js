/*
 * @Author: dog son two zxc1123378080@gmail.com
 * @Date: 2023-05-31 16:39:42
 * @LastEditors: dog son two zxc1123378080@gmail.com
 * @LastEditTime: 2023-05-31 21:58:25
 * @FilePath: \defi-on-polygon-main\test\pages\[id].js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    
    const postData = await getPostData(params.id);
    console.log(postData);
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ postData }) {
    return (
      <Layout>
       <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
    );
  }