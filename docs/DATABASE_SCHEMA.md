# Database Schema Documentation

This document outlines the comprehensive database schema for both PostgreSQL and MongoDB used in the **mls-gateway** project. Below are the definitions for the various tables and collections used in the system.

## PostgreSQL Schema

### Listings Table
- **Table Name:** listings  
- **Columns:**  
  - `id` (UUID, Primary Key)  
  - `title` (VARCHAR, Not Null)  
  - `description` (TEXT, Not Null)  
  - `price` (DECIMAL, Not Null)  
  - `created_at` (TIMESTAMP, Not Null)  
  - `updated_at` (TIMESTAMP, Not Null)  

- **Indexes:**  
  - `idx_listings_title` (on title)  
  - `idx_listings_price` (on price)  

### Images Table
- **Table Name:** images  
- **Columns:**  
  - `id` (UUID, Primary Key)  
  - `listing_id` (UUID, Foreign Key)  
  - `url` (VARCHAR, Not Null)  
  - `created_at` (TIMESTAMP, Not Null)  

- **Indexes:**  
  - `idx_images_listing_id` (on listing_id)  
  - `idx_images_url` (on url)  

### Audit Logs
- **Table Name:** audit_logs  
- **Columns:**  
  - `id` (UUID, Primary Key)  
  - `action` (VARCHAR, Not Null)  
  - `user_id` (UUID, Not Null)  
  - `timestamp` (TIMESTAMP, Not Null)  

- **Indexes:**  
  - `idx_audit_logs_user_id` (on user_id)  
  
### Sync Status
- **Table Name:** sync_status  
- **Columns:**  
  - `id` (UUID, Primary Key)  
  - `status` (VARCHAR, Not Null)  
  - `last_synced` (TIMESTAMP)  
- **Indexes:** 
  - `idx_sync_status_last_synced` (on last_synced)  

## MongoDB Collections

### Listings Collection
- **Collection Name:** listings  
- **Document Structure:**  
  - `title` (String, Required)  
  - `description` (String, Required)  
  - `price` (Decimal, Required)  
  - `created_at` (Date, Required)  
  - `updated_at` (Date, Required)  

- **Indexes:**  
  - Index on `title`  
  - Index on `price`  

### Images Collection
- **Collection Name:** images  
- **Document Structure:**  
  - `listing_id` (UUID, Required)  
  - `url` (String, Required)  
  - `created_at` (Date, Required)  

- **Indexes:**  
  - Unique index on `url` to ensure no duplicates  

### Audit Logs Collection
- **Collection Name:** audit_logs  
- **Document Structure:**  
  - `action` (String, Required)  
  - `user_id` (UUID, Required)  
  - `timestamp` (Date, Required)  

- **Indexes:**  
  - Index on `user_id`  

### Sync Status Collection
- **Collection Name:** sync_status  
- **Document Structure:**  
  - `status` (String, Required)  
  - `last_synced` (Date)  

- **Indexes:**  
  - Index on `last_synced` for efficiency in querying sync status.