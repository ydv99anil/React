import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket; // busket = storage

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client); 
        this.bucket = new Storage(this.client);  
    }

    async createPost ({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                })
        } catch (error) {
            throw error 
        }
    }

    async updatePost (slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                });
        } catch (error) {
            throw error 
        }
    }

    async deletePost (slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug, 
            )
            return true;
        } catch (error) {
            console.error("Error in Deleting post:", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                [/* QUERIES = Optional */],
            );
        } catch (error) {
            throw error
        }
    }

    async getAllPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal('status', 'active')],
            );
        } catch (error) {
            throw error
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}


const service = new Service()

export default service